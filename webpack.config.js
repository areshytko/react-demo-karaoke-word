var webpack = require('webpack');
var path = require('path');


var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=[local]!postcss' },
      { test: /\.html$/, loader: 'text' },
      { test: /\.(png|jpg)(\?*)?/, loader: 'base64-inline-loader' }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
      template: './src/index.html'
  })]
};