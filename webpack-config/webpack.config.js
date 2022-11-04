// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
  // entry: './src/index.js',
  entry: './src/index.tsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/,
        type: 'asset'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.tsx?/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }, {
          loader: 'ts-loader'
        }]
      }
    ]
  },
  plugins: [new CleanWebpackPlugin()]
}
