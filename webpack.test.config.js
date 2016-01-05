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
    entry: "./test/tests.js",
    output: {
      path: "./test/",
      filename: "test.build.js",
      libraryTarget: "umd"
    },
    module: {
      loaders: [{
        test: /\.js$/,
        loader: 'babel',
        query: {
            // optional: ['utility.inlineEnvironmentVariables', 'minification.deadCodeElimination']
        }
      }],
      noParse: []
    }
  }

];
