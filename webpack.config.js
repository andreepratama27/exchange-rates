const path = require("path");
const webpack = require("webpack");
const extractTextWebpack = require("extract-text-webpack-plugin");
const htmlWebpack = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "index.js")
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  mode: "development",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: extractTextWebpack.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.scss$/,
        use: extractTextWebpack.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },

  plugins: [
    new extractTextWebpack({
      filename: "style.[chunkhash].css",
      disable: false,
      allChunks: true
    }),

    new htmlWebpack({
      inject: false,
      hash: true,
      template: "./src/index.html",
      filename: "index.html"
    })
  ]
};
