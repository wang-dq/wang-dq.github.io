var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules = path.resolve(__dirname, "./node_modules");
var config = {
  context: path.resolve(__dirname, "./"),
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "index.js",
    publicPath: "build/"
  },
  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "src")],
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.js(x)*?$/,
        use: ["babel-loader"],
        exclude: [/node_modules/]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: false,
      warnings: false
    })
  ],
  devtool: "eval",
  devServer: { hot: true, port: 8090, inline: true, compress: true }
};

module.exports = config;
