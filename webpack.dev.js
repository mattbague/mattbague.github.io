const {CleanWebpackPlugin} = require("clean-webpack-plugin");

const {merge} = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new CleanWebpackPlugin()
  ]
});