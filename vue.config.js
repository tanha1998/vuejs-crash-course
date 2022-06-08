module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://62431f84b6734894c15b41ad.mockapi.io',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' },
      },
    },
  },
}
