const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // entry: ['./src/a.js', './src/b.js'],
  // entry: {
  //   a: './src/a.js',
  //   b: './src/b.js',
  //   build: './src/index.js',
  // },
  entry: './src/index.js',
  mode: "development",
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};