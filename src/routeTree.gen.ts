/* eslint-disable */
// @ts-nocheck

import { Route as rootRouteImport } from './routes/__root'
import { Route as RecuperarSenhaRouteImport } from './routes/recuperar-senha'
import { Route as IndexRouteImport } from './routes/index'
import { Route as EntrarRouteImport } from './routes/entrar'
import { Route as DashboardRouteImport } from './routes/dashboard'
import { Route as CadastroRouteImport } from './routes/cadastro'
import { Route as AppRouteImport } from './routes/app'
import { Route as AppStoriesRouteImport } from './routes/app.stories'
import { Route as AppReelsRouteImport } from './routes/app.reels'
import { Route as AppImagensRouteImport } from './routes/app.imagens'
import { Route as AppIdeiasRouteImport } from './routes/app.ideias'

const RecuperarSenhaRoute = RecuperarSenhaRouteImport.update({
  id: '/recuperar-senha',
  path: '/recuperar-senha',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const EntrarRoute = EntrarRouteImport.update({
  id: '/entrar',
  path: '/entrar',
  getParentRoute: () => rootRouteImport,
} as any)
const DashboardRoute = DashboardRouteImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRouteImport,
} as any)
const CadastroRoute = CadastroRouteImport.update({
  id: '/cadastro',
  path: '/cadastro',
  getParentRoute: () => rootRouteImport,
} as any)
const AppRoute = AppRouteImport.update({
  id: '/app',
  path: '/app',
  getParentRoute: () => rootRouteImport,
} as any)
const AppStoriesRoute = AppStoriesRouteImport.update({
  id: '/stories',
  path: '/stories',
  getParentRoute: () => AppRoute,
} as any)
const AppReelsRoute = AppReelsRouteImport.update({
  id: '/reels',
  path: '/reels',
  getParentRoute: () => AppRoute,
} as any)
const AppImagensRoute = AppImagensRouteImport.update({
  id: '/imagens',
  path: '/imagens',
  getParentRoute: () => AppRoute,
} as any)
const AppIdeiasRoute = AppIdeiasRouteImport.update({
  id: '/ideias',
  path: '/ideias',
  getParentRoute: () => AppRoute,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/app': typeof AppRouteWithChildren
  '/cadastro': typeof CadastroRoute
  '/dashboard': typeof DashboardRoute
  '/entrar': typeof EntrarRoute
  '/recuperar-senha': typeof RecuperarSenhaRoute
  '/app/ideias': typeof AppIdeiasRoute
  '/app/imagens': typeof AppImagensRoute
  '/app/reels': typeof AppReelsRoute
  '/app/stories': typeof AppStoriesRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/app': typeof AppRouteWithChildren
  '/cadastro': typeof CadastroRoute
  '/dashboard': typeof DashboardRoute
  '/entrar': typeof EntrarRoute
  '/recuperar-senha': typeof RecuperarSenhaRoute
  '/app/ideias': typeof AppIdeiasRoute
  '/app/imagens': typeof AppImagensRoute
  '/app/reels': typeof AppReelsRoute
  '/app/stories': typeof AppStoriesRoute
}

export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/app': typeof AppRouteWithChildren
  '/cadastro': typeof CadastroRoute
  '/dashboard': typeof DashboardRoute
  '/entrar': typeof EntrarRoute
  '/recuperar-senha': typeof RecuperarSenhaRoute
  '/app/ideias': typeof AppIdeiasRoute
  '/app/imagens': typeof AppImagensRoute
  '/app/reels': typeof AppReelsRoute
  '/app/stories': typeof AppStoriesRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/app'
    | '/cadastro'
    | '/dashboard'
    | '/entrar'
    | '/recuperar-senha'
    | '/app/ideias'
    | '/app/imagens'
    | '/app/reels'
    | '/app/stories'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/app'
    | '/cadastro'
    | '/dashboard'
    | '/entrar'
    | '/recuperar-senha'
    | '/app/ideias'
    | '/app/imagens'
    | '/app/reels'
    | '/app/stories'
  id:
    | '__root__'
    | '/'
    | '/app'
    | '/cadastro'
    | '/dashboard'
    | '/entrar'
    | '/recuperar-senha'
    | '/app/ideias'
    | '/app/imagens'
    | '/app/reels'
    | '/app/stories'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AppRoute: typeof AppRouteWithChildren
  CadastroRoute: typeof CadastroRoute
  DashboardRoute: typeof DashboardRoute
  EntrarRoute: typeof EntrarRoute
  RecuperarSenhaRoute: typeof RecuperarSenhaRoute
}

interface AppRouteChildren {
  AppIdeiasRoute: typeof AppIdeiasRoute
  AppImagensRoute: typeof AppImagensRoute
  AppReelsRoute: typeof AppReelsRoute
  AppStoriesRoute: typeof AppStoriesRoute
}

const AppRouteChildren: AppRouteChildren = {
  AppIdeiasRoute: AppIdeiasRoute,
  AppImagensRoute: AppImagensRoute,
  AppReelsRoute: AppReelsRoute,
  AppStoriesRoute: AppStoriesRoute,
}

const AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren)

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AppRoute: AppRouteWithChildren,
  CadastroRoute: CadastroRoute,
  DashboardRoute: DashboardRoute,
  EntrarRoute: EntrarRoute,
  RecuperarSenhaRoute: RecuperarSenhaRoute,
}

export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
