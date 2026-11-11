import { createFileRoute, Navigate, Outlet, useLocation } from "@tanstack/react-router";

export const Route = createFileRoute("/app")({
  component: AppLayout,
});

function AppLayout() {
  const { pathname } = useLocation();

  if (pathname === "/app" || pathname === "/app/") {
    return <Navigate to="/app/gerador" replace />;
  }

  return <Outlet />;
}
