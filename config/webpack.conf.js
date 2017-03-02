'use strict'

const helpers = require('./helpers')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  devtool: "source-map",
  //target: 'node',

  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ],
    modules: [
      helpers.root(),
      'node_modules'
    ]
  },
  entry: {
    app: './frontend/app.tsx'
  },
  output: {
    path: helpers.root('dist'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd'
  },

  //externals: helpers.buildNodeExternals(),

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'source-map-loader'
      },
      {
        enforce: 'pre',
        test: /\.ts$/,
        use: 'tslint-loader',
        exclude: [
          /node_modules/,
          /\.(spec|e2e)\.ts$/
        ]
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'awesome-typescript-loader',
        exclude: [ /\.(spec|e2e)\.ts$/ ]
      }
    ]
  },

  plugins: [
    new webpack.DllReferencePlugin({
      manifest: require('@solid-opinion/vendor-common/dist/bundle-manifest.json'),
      sourceType: 'umd'
    }),
    new CopyWebpackPlugin([{
      context: helpers.root(),
      from: 'node_modules/\@solid-opinion/vendor-common/dist/bundle.js',
      to: 'vendor-common.js'
    }])
  ],

  node: {
    global: true,
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  },

  devServer: {
    port: 8081
  }
}
