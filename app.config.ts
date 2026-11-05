import { defineConfig } from 'vinxi'
import { tanstackBuildConfig } from '@lovable.dev/vite-tanstack-config'

export default defineConfig({
  routers: {
    public: {
      type: 'static',
      dir: './public',
      base: '/'
    },
    client: {
      type: 'client',
      plugins: () => [tanstackBuildConfig()]
    }
  }
})
