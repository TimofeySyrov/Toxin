const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    'index': ['./js/index.js'],
    'search-room': ['./js/search-room.js'],
    'room-details': ['./js/room-details.js'],
    'sign-in': ['./js/sign-in.js'],
    'sign-up': ['./js/sign-up.js'],
    'colors-type': ['./js/colors-type.js'],
    'form-elements': ['./js/form-elements.js'],
    'cards': ['./js/cards.js'],
    'headers-footers': ['./js/headers-footers.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash].js'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets'),
          to: path.resolve(__dirname, 'dist/assets')
        }
      ],
    }),
    new FaviconsWebpackPlugin({
      logo: './assets/favicons/favicon.ico',
      outputPath: './assets/favicons/',
      prefix: 'assets/favicons/'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './pug/index.pug',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'search-room.html',
      template: './pug/search-room.pug',
      chunks: ['search-room'],
    }),
    new HtmlWebpackPlugin({
      filename: 'room-details.html',
      template: './pug/room-details.pug',
      chunks: ['room-details'],
    }),
    new HtmlWebpackPlugin({
      filename: 'sign-in.html',
      template: './pug/sign-in.pug',
      chunks: ['sign-in'],
    }),
    new HtmlWebpackPlugin({
      filename: 'sign-up.html',
      template: './pug/sign-up.pug',
      chunks: ['sign-up'],
    }),
    new HtmlWebpackPlugin({
      filename: 'colors-type.html',
      template: './pug/colors-type.pug',
      chunks: ['colors-type'],
    }),
    new HtmlWebpackPlugin({
      filename: 'form-elements.html',
      template: './pug/form-elements.pug',
      chunks: ['form-elements'],
    }),
    new HtmlWebpackPlugin({
      filename: 'cards.html',
      template: './pug/cards.pug',
      chunks: ['cards'],
    }),
    new HtmlWebpackPlugin({
      filename: 'headers-footers.html',
      template: './pug/headers-footers.pug',
      chunks: ['headers-footers'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + '/';
              }
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
        },
      },
      {
        test: /\.(gif|png|jpe?g|svg|ico)$/,
        exclude: [/fonts/],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/img/[name].[ext]',
              outputPath: './assets',
              useRelativePath: true
        },
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        exclude: [/img/],
        use: {
          loader: 'file-loader',
          options: {
            name: '/fonts/[name].[ext]',
            outputPath: './assets',
            useRelativePath: true,
          }
        }
      },
    ],
  },
};