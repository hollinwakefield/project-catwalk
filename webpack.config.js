const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './client/src/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/dist'),
    clean: true,
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
