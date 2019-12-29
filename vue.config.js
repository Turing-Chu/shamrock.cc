// vue.config.js
module.exports = {
  // options...
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'src/assets',
  indexPath: 'index.html',
  filenameHashing: true,
  devServer: {
    host: '0.0.0.0',
    port: 8090,
    // https://github.com/chimurai/http-proxy-middleware#http-proxy-options
    proxy: {
      '^/api': {
        target: 'http://127.0.0.1:8001/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
