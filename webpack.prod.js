const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CompressionPlugin = require("compression-webpack-plugin");
const path = require("path");

module.exports = merge(common, {
  mode: "production",
  devtool: "cheap-module-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "mattbague",
      template: path.resolve(__dirname, "src/main/html/prod.index.html"),
      cache: false
    })
    // ,
    // new CompressionPlugin({
    //   test: /\.js(\?.*)?$/i
    // })
  ]
});