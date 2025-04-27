/* eslint-env node */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const pages =['index', 'map']; 

module.exports = {
  mode: "production",
  devtool: "source-map", // better for production
  entry: pages.reduce((entries, page) => {
    entries[page] = `./src/${page}.js`;
    return entries;
  }, {}),
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: pages.map(page => new HtmlWebpackPlugin({
    filename: `${page}.html`,
    template: `./src/${page}.html`,
    chunks: [page],
  })),
  devServer: {
    allowedHosts: ['44.220.155.22'], 
    watchFiles: ["./src/**/*.html"],
    host: "0.0.0.0",
    historyApiFallback: true, 
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    minimize: true,
  },
};
