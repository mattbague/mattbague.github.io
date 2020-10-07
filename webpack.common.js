const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");
const glob = require("glob");
const PurgecssPlugin = require("purgecss-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/main/js/index.tsx"),
  output: {
    filename: "bundle.js",
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
      // chunks: "all",
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial",
          priority: 10,
          enforce: true
        }
      }
    }
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: "styles.css",
    // }),
    new PurgecssPlugin({
      paths: glob.sync(`src/**/*`, {nodir: true}),
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
              plugins: ["@babel/plugin-proposal-object-rest-spread", "@babel/plugin-proposal-class-properties"]
            }
          }
        ]
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
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [
                require("tailwindcss")("./tailwind.config.js"),
                require("autoprefixer"),
              ],
            },
          }
        ],
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[ext]",
            }
          },
          {
            loader: "image-webpack-loader"
          }
        ]
      }
    ]
  },
  externals: {
  }
};