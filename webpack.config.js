const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (_env, argv) => ({
  entry: './src/index.tsx',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: argv.mode === 'production' ? 'source-map' : 'eval-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    host: '127.0.0.1',
    port: 9000,
    hot: true,
  },
  optimization: {
    splitChunks: { chunks: 'all' },
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
          },
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|jpe?g|gif|svg)$/i, type: 'asset/resource' },
    ],
  },
  resolve: { extensions: ['.tsx', '.ts', '.jsx', '.js'] },
});
