const { defineConfig } = require('@vue/cli-service')
const fs = require('fs')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  outputDir: './docs',
  devServer: {
    https: {
      key: fs.readFileSync('./example.com+5-key.pem'),
      cert: fs.readFileSync('./example.com+5.pem'),
    },
  }
})
