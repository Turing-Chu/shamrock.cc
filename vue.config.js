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
    port: 8080,
    /*
    proxy: {
      '^/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      },
      '^/foo': {
        target: '<other_url>'
      }
    }
    */
  },
};
