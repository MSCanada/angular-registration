var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ConfigLocal=require('./webpack.local');

module.exports = function(options) {

  return {
resolve: {
  root:__dirname,
  alias: {
    configApi:"./"+options.env + ".configApi.js"
}
},
    devtool: 'sourcemap',
    entry: {

      app: "./client/app/"+options.env+".app.js",

    },
    output: {
      path: __dirname + "/dist",
      filename: "[name].js",
      publicPath:"/"
    },
    module: {
      loaders: [
        {test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loaders: ['ng-annotate','babel-loader']},
        {test: /\.html$/, loader: 'raw'},
        {test: /\.styl$/, loader: 'style!css!stylus'},
        {test: /\.css$/, loader: 'style!css'},
        {
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass'],
         
        }
      ]
    },
    plugins: [
      // Injects bundles in your index.html instead of wiring all manually.
      // It also adds hash to all injected assets so we don't have problems
      // with cache purging during deployment.
      new HtmlWebpackPlugin({
        template: 'dist/index.html',
        inject: 'body',
        hash: true
      }),

      new webpack.HotModuleReplacementPlugin(),

      // Automatically move all modules defined outside of application directory to vendor bundle.
      // If you are using more complicated project structure, consider to specify common chunks manually.
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module, count) {
          return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
        }
      })
    ]
  } ;
}
