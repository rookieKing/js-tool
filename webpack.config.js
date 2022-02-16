const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  devtool: false,
  output: {
    filename: 'rookie.tool.js',
    path: path.resolve(__dirname, 'dist'),
  }
};
