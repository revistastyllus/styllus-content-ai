import { createStartHandler } from '@tanstack/start/client'
import { createRouterInstance } from './router'

const router = createRouterInstance()

createStartHandler({
  router,
})()

