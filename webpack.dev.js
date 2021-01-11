const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
  mode: "development",
  context: __dirname,
  entry: {
    main: ["./scripts/main.js", "./styles/main.scss"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve("../assets/bundles"),
    publicPath: "http://localhost:8080/assets/bundles/",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new BundleTracker({
      path: __dirname,
      filename: "./assets/webpack-stats.json",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },

  devServer: {
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    publicPath: "http://localhost:8080/assets/bundles/",
  },
};
