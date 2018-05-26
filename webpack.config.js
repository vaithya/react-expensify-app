// Entry point --> Where to output the final bundle file.

// Check webpack.js.org ************************

const path = require('path');

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/, //What files to run babel on
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};

// Loader - Lets you customise the behaviour of webpack
// Whenever webpack sees a js file, we can do something with those files.
// Like run babel on them. Transform them.
