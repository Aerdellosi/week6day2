const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // new line
const ESLintPlugin = require('eslint-webpack-plugin');   // new line!

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },
  devServer: {                 // new line
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },                           
  devtool: 'eval-source-map', 
  plugins: [
    new ESLintPlugin(), // new line!
    new CleanWebpackPlugin({
        verbose: true
    }), // new line
    new HtmlWebpackPlugin({
      title: 'Shape Tracker',
      template: './src/index.html',
      inject: 'body',
      filename: "index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(gif|png|avif|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/'
            }
          }
        ]
      },
      {
        test:/\.html$/,
        use: [
          'html-loader'
        ]
      },
  
    
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
     
     

    
    
    ]
  }
};