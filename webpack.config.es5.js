const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  },
  output: {
    filename: 'rookie.tool.es5.js',
    path: path.resolve(__dirname, 'dist'),
  }
};
