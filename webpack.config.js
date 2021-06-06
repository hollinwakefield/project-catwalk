const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './client/src/index.jsx',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/dist'),
    clean: {
      keep: 'index.html',
    },
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
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
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
