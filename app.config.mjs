export default {
  routers: {
    public: {
      type: 'static',
      dir: './public',
      base: '/'
    },
    client: {
      type: 'client',
      dir: './src',
      base: '/'
    }
  }
}



