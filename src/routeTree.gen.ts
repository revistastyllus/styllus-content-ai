/* eslint-disable */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols
import { Route as rootRoute } from "./routes/__root"
import { Route as AppImport } from "./routes/app"
import { Route as AppStoriesImport } from "./routes/app.stories"
import { Route as AppReelsImport } from "./routes/app.reels"
import { Route as AppImagensImport } from "./routes/app.imagens"
import { Route as AppIdeiasImport } from "./routes/app.ideias"
import { Route as AppHistoricoImport } from "./routes/app.historico"
import { Route as AppGeradorImport } from "./routes/app.gerador"
import { Route as AppCarrosselImport } from "./routes/app.carrossel"
const AppRoute = AppImport.update({ path: "/app", getParentRoute: () => rootRoute })
const AppStoriesRoute = AppStoriesImport.update({ path: "/stories", getParentRoute: () => AppRoute })
const AppReelsRoute = AppReelsImport.update({ path: "/reels", getParentRoute: () => AppRoute })
const AppImagensRoute = AppImagensImport.update({ path: "/imagens", getParentRoute: () => AppRoute })
const AppIdeiasRoute = AppIdeiasImport.update({ path: "/ideias", getParentRoute: () => AppRoute })
const AppHistoricoRoute = AppHistoricoImport.update({ path: "/historico", getParentRoute: () => AppRoute })
const AppGeradorRoute = AppGeradorImport.update({ path: "/gerador", getParentRoute: () => AppRoute })
const AppCarrosselRoute = AppCarrosselImport.update({ path: "/carrossel", getParentRoute: () => AppRoute })
export const routeTree = rootRoute._addFileChildren(rootRoute._addFileTypes({ AppRoute: AppRoute._addFileChildren({ AppCarrosselRoute, AppGeradorRoute, AppHistoricoRoute, AppIdeiasRoute, AppImagensRoute, AppReelsRoute, AppStoriesRoute }) }))
