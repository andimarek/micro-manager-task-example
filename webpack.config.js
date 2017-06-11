var path = require('path');
var webpack = require('webpack');

module.exports = {
  target: 'node',
  entry: ['./src/index'],
  output: {
    filename: 'task.js',
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts','.js']
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'awesome-typescript-loader'
    }]
  },
  externals: {
    'lodash': 'lodash',
  },
  plugins: [
  ],
};