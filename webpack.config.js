"use strict";

const { resolve, join } = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const OUTPUT_PATH = resolve(__dirname, "dist");
const DOCS_PATH = resolve(__dirname, "docs");
const BROWSERS = ['> 1%', 'last 2 versions', 'Firefox ESR', 'not ie <= 11'];

const module_config = {
  rules: [
    {
      test: /\.(pcss)$/,
      use: ['text-loader', 'postcss-loader']
    },
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [[
            'env',
            {
              targets: {browsers: BROWSERS},
              debug: true
            }
          ]],
          plugins: [['transform-object-rest-spread', {useBuiltIns: true}]]
        }
      }
    }
  ]
};
const module_config_module =  {
  rules: [
    {
      test: /\.(pcss)$/,
      use: ['text-loader', 'postcss-loader']
    },
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            [
              "env",
              {
                targets: {
                  browsers: ["last 2 Chrome versions", "Safari 10"]
                }
              }
            ]
          ],
          plugins: [["transform-object-rest-spread", { useBuiltIns: true }]]
        }
      }
    }
  ]
};

module.exports = [
  {
    entry: "./build.js",
    output: {
      filename: "main.js",
      path: OUTPUT_PATH
    },
    module: module_config
  }, {
    entry: "./build.js",
    output: {
      filename: "main.module.js",
      path: OUTPUT_PATH
    },
    module: module_config_module
  }, {
    entry: "./docs/demo.js",
    output: {
      filename: "app.js",
      path: join(DOCS_PATH, "assets")
    },
    module: module_config
  }, {
    entry: "./docs/demo.js",
    output: {
      filename: "app.module.js",
      path: join(DOCS_PATH, "assets")
    },
    module: module_config_module,
    plugins: [
      new CopyWebpackPlugin([
        {
          from: resolve(
            "./node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"
          ),
          to: join(DOCS_PATH, "vendor"),
          flatten: true
        },
        {
          from: resolve(
            "./node_modules/@webcomponents/webcomponentsjs/bundles"
          ),
          to: join(DOCS_PATH, "vendor/bundles"),
          flatten: true
        },
        {
          from: resolve(
            "./node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js"
          ),
          to: join(DOCS_PATH, "vendor"),
          flatten: true
        }
      ])
    ],
  }
];