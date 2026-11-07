import { createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

export const router = createRouter({
  routeTree,
});

// Essa linha resolve o erro do Netlify dizendo que o getRouter sumiu
export const getRouter = () => router;

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

