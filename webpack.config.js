const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssStrackPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/', //* Siempre servirá el archivo de rutas principal */
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    compress: true,
    open: true,
    historyApiFallback: true, //* Mantiene el historico de las rutas*/
  },
  resolve: {
    extensions: ['.js', '.jsx'] /** Extensiones permitidas en el proyecto */,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }],
      },
      {
        test: /\.css$/,
        use: [{ loader: MiniCssStrackPlugin.loader }, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'index.html',
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    new MiniCssStrackPlugin({
      filename: 'css/[name].css',
    }),
  ],
};
