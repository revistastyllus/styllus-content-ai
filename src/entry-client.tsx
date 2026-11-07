import { createStartHandler } from '@tanstack/start/client'
import { router } from './router'

createStartHandler({
  router,
})()

