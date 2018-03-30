const path = require('path')

module.exports = {
  mode: 'none',
  entry: './_src/main.js',
  output: {
    path: path.resolve('assets/js/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }
    ]
  }
}
