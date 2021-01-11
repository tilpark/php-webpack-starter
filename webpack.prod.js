const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
  mode: "production",
  context: __dirname,
  entry: {
    main: ["./scripts/main.js", "./styles/main.scss"],
  },
  output: {
    filename: "[name]-[hash].js",
    path: path.resolve("./assets/bundles"),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name]-[hash].css",
    }),
    new BundleTracker({
      path: __dirname,
      filename: "./assets/webpack-stats.json",
      publicPath: "http://localhost:8002/assets/bundles/",
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
};
