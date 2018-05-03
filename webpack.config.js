const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./src/code-block.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(pcss)$/,
        use: "text-loader",
      }
    ]
  }
};
