var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'js');
var CSS_DIR = path.resolve(__dirname, 'css');
var LESS_DIR = path.resolve(__dirname, 'less');
var IMG_DIR = path.resolve(__dirname, 'img');

var config = {
  entry: APP_DIR + '/App.js',
  output: {
    path: BUILD_DIR,
    publicPath: "/public/",
    filename: 'bundle.js'
  },
  resolve: {
    root: path.resolve('./js'),
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: APP_DIR,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.less$/,
        include: LESS_DIR,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.css$/,
        include: CSS_DIR,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};

module.exports = config;