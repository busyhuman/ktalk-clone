const { defineConfig } = require('@vue/cli-service')
const fs = require('fs')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/ktalk-clone/' : '/',
  outputDir: './docs',
  indexPath: "../index.html",
  devServer: {
    https: {
      key: fs.readFileSync('./example.com+5-key.pem'),
      cert: fs.readFileSync('./example.com+5.pem'),
    },
  }
})
