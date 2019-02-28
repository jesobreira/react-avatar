const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './example/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './example/app.jsx',
  mode: 'development',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        loader: 'babel-loader',
        test: /\.jsx$/,
        exclude: /node_modules/
      }, {
        loader: 'raw-loader',
        test: /\.svg$/,
        exclude: /node_modules/
      }
    ],
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.DefinePlugin({
      SOURCE_PATH: JSON.stringify('./docs')
    })
  ],
  devtool: 'cheap-module-eval-source-map'
};
