/* eslint-disable import/no-extraneous-dependencies,  no-var */
var webpack = require('webpack');
var path = require('path');
var VendorChunkPlugin = require('webpack-vendor-chunk-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var webpackConfig;

const NODE_ENV = process.env.NODE_ENV || 'development';

webpackConfig = {
  context: __dirname,
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  },
  entry: {
    app: './src/index.js',
    vendor: [
      'es6-promise',
      'is-url',
      'isomorphic-fetch',
      'moment',
      'node-uuid',
      'react',
      'react-bootstrap',
      'react-dom',
      'react-file-reader-input',
      'react-redux',
      'react-router',
      'react-router-redux',
      'recharts',
      'redux',
      'redux-logger',
      'redux-promise',
      'redux-thunk',
    ],
  },
  output: {
    path: path.resolve(__dirname, '../src/main/resources/static'),
    // path: path.resolve(__dirname, '../target/ExportData-1.0-SNAPSHOT/WEB-INF/classes/static'),
    filename: 'index.js',
    publicPath: '/assets/',
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx'],
  },
  resolveLoader: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.webpack-loader.js', '.web-loader.js', '.loader.js', '.js'],
  },
  devtool: NODE_ENV === 'development' ? 'source-map' : null,
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, '../src/main/resources/static')], {
      root: path.resolve(__dirname, '../src/main/resources/'),
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new VendorChunkPlugin('vendor'),
    new CopyWebpackPlugin([
      { from: 'src/index.html', to: 'index.html' },
      { from: 'css', to: 'css' },
      { from: 'assets', to: 'assets' },
      { from: 'fonts', to: 'fonts' },
      { from: 'favicon.ico', to: 'favicon.ico' },
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
      },
    }),
  ],
};

if (NODE_ENV === 'production') {
  webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({}));
}

module.exports = webpackConfig;
