var webpack = require("webpack");
var version = require("./package.json").version;
var banner =
  "/**\n" +
  " * ajax-cache v" + version + "\n" +
  " * https://github.com/guangfu/ajaxCache\n" +
  " * Released under the MIT License.\n" +
  " */\n";

module.exports = [
  {
    entry: "./src/index",
    output: {
      path: "./dist",
      filename: "ajax-cache.js",
      libraryTarget: "umd"
    },
    module: {
      loaders: [{
        test: /\.js$/,
        loader: 'babel',
        query: {
            optional: ['utility.inlineEnvironmentVariables', 'minification.deadCodeElimination']
        }
      }],
      noParse: []
    },  
    plugins: [
      new webpack.BannerPlugin(banner, {raw: true})
    ]
  },

  {
    entry: "./src/index",
    output: {
      path: "./dist",
      filename: "ajax-cache.min.js",
      libraryTarget: "umd"
    },
    module: {
      loaders: [{
        test: /\.js$/,
        loader: 'babel', 
        query: {
            optional: ['utility.inlineEnvironmentVariables', 'minification.deadCodeElimination']
        }
      }],
      noParse: []
    },  
    plugins: [
      new webpack.optimize.UglifyJsPlugin,
      new webpack.BannerPlugin(banner, {raw: true})
    ]
  }

];
