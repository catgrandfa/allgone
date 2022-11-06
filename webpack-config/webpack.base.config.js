// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  //入口
  entry: './src/index.tsx',
  // 出口
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name]-[hash:8].js',
    clean: true,
  },
  //便于调试
  devtool: "eval-cheap-module-source-map",
  resolve: {
    //省略后缀名
    extensions: ['*', '.js', '.jsx', '.json', 'ts', 'tsx'],
    // 配置路径别名
    alias: {
      '@': path.resolve('src'),
      '@assets': path.resolve('src/assets')
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/,
        type: 'asset/resource'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.tsx?$/i,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./public/tpl/index.html"
  })],
  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //     // maxSize 每个包的最大 250000 字节
  //     maxSize: 250000,
  //   }
  // },
  // performance: {
  //   hints: "error",
  //   // 打包之后的文件的大小超过 250000 字节报错提示
  //   maxAssetSize: 250000,
  //   // 首次加在文件的大小
  //   maxEntrypointSize: 400000,
  // }
}
