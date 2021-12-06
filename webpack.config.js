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
  entry: './js/index.js',
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
    new FaviconsWebpackPlugin('./assets/favicons/favicon.ico'),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets'),
          to: path.resolve(__dirname, 'dist/assets')
        }
      ],
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
    }),
    new HtmlWebpackPlugin({
      filename: 'search-room.html',
      template: './pug/search-room.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'room-details.html',
      template: './pug/room-details.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'sign-in.html',
      template: './pug/sign-in.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'sign-up.html',
      template: './pug/sign-up.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'colors-type.html',
      template: './pug/colors-type.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'form-elements.html',
      template: './pug/form-elements.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'cards.html',
      template: './pug/cards.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'headers-footers.html',
      template: './pug/headers-footers.pug',
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
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + '/';
              }
            },
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: path.resolve(__dirname, 'src/styles/_vars.scss'),
            },
          },
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
              name: 'assets/img/[name].[ext]',
              publicPath: '../',
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
            name: './assets/fonts/[name].[ext]',
            useRelativePath: true,
          }
        }
      },
    ],
  },
};