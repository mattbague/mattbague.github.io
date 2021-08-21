const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");
const glob = require("glob");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, "src/main/js/index.tsx"),
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  resolve: {
    // Add ".ts" and ".tsx" as resolvable extensions.
    modules: [
      path.resolve(__dirname, "src/main/js"),
      path.resolve(__dirname, "src/main/style"),
      "node_modules"
    ],
    extensions: [".ts", ".tsx", ".js", ".css", ".less"]
  },
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
    ignored: /node_modules/
  },
  optimization: {
    splitChunks: {
      chunks: "async",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial",
          enforce: true
        }
      }
    }
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new PurgecssPlugin({
      paths: glob.sync(`src/**/*`, {nodir: true}),
    }),
    new HtmlWebpackPlugin({
      title: "mattbague",
      template: path.resolve(__dirname, "src/main/html/index.html"),
      cache: false
    }),
    new FaviconsWebpackPlugin("src/main/img/icon.png"),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2018'
        }
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Less to CSS
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {loader: "css-loader", options: {importLoaders: 1}},
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                ident: "postcss",
                plugins: [
                  require("tailwindcss")("./tailwind.config.js"),
                  require("autoprefixer"),
                ]
              }
            },
          }
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[hash][ext][query]'
        }
      }
    ]
  },
  externals: {}
};