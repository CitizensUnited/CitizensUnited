const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require('fs');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './client/index.js',
  devtool: 'source-map',
  devServer: {
    port: 8080,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({ template: 'client/index-template.html' }),
    new CopyWebpackPlugin([{ from: 'client/assets', to: 'assets' }]),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      }, {
        test: /\.(png|svg|jpg|gif|ttf|eot|woff|woff2|mp4|mtl|obj|fbx|gltf)$/,
        use: [
          'file-loader',
        ],
      }],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('./'),
  },
};
