import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { RegisterPage } from "@/routes/cadastro";
import { supabase } from "@/lib/supabase";

const mockNavigate = vi.fn();

vi.mock("@tanstack/react-router", async () => {
  const actual = await vi.importActual<typeof import("@tanstack/react-router")>("@tanstack/react-router");

  return {
    ...actual,
    Link: ({ children, ...props }: any) => <a {...props}>{children}</a>,
    useNavigate: () => mockNavigate,
  };
});

vi.mock("@/lib/supabase", () => ({
  isSupabaseConfigured: () => true,
  supabase: {
    auth: {
      signUp: vi.fn(),
      signInWithPassword: vi.fn(),
      getSession: vi.fn().mockResolvedValue({ data: { session: null } }),
      onAuthStateChange: vi.fn(() => ({ data: { subscription: { unsubscribe: vi.fn() } } })),
    },
  },
}));

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
});

describe("Register page", () => {
  it("toggles the password visibility and signs in immediately after successful signup", async () => {
    const signUpMock = vi.mocked(supabase.auth.signUp);
    const signInMock = vi.mocked(supabase.auth.signInWithPassword);

    signUpMock.mockResolvedValue({
      data: { user: { id: "user-1" }, session: null },
      error: null,
    } as any);

    signInMock.mockResolvedValue({
      data: { user: { id: "user-1" }, session: { user: { id: "user-1" } } },
      error: null,
    } as any);

    render(<RegisterPage />);

    const passwordInput = screen.getByLabelText(/senha/i);
    expect(passwordInput).toHaveAttribute("type", "password");

    fireEvent.click(screen.getByRole("button", { name: /mostrar senha/i }));
    expect(passwordInput).toHaveAttribute("type", "text");

    fireEvent.click(screen.getByRole("button", { name: /ocultar senha/i }));
    expect(passwordInput).toHaveAttribute("type", "password");

    fireEvent.change(screen.getByLabelText(/nome/i), { target: { value: "Ana Silva" } });
    fireEvent.change(screen.getByLabelText(/e-mail/i), { target: { value: "ana@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "senha123" } });

    fireEvent.click(screen.getByRole("button", { name: /criar conta/i }));

    await waitFor(() => expect(signUpMock).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(signInMock).toHaveBeenCalledWith({ email: "ana@email.com", password: "senha123" }));

    expect(mockNavigate).toHaveBeenCalledWith({ to: "/dashboard" });
    expect(screen.queryByText(/e-mail de confirmação/i)).not.toBeInTheDocument();
  });
});
