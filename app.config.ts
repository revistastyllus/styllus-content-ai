import { tanstackBuildConfig } from '@lovable.dev/vite-tanstack-config'

export default {
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
}
