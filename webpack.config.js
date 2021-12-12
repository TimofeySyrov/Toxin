const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    index: ['./pages/index/Index.js'],
    cards: ['./pages/cards/Cards.js'],
    'search-room': ['./pages/search-room/SearchRoom.js'],
    'room-details': ['./pages/room-details/RoomDetails.js'],
    'sign-in': ['./pages/sign-in/SignIn.js'],
    'sign-up': ['./pages/sign-up/SignUp.js'],
    'colors-type': ['./pages/colors-type/ColorsType.js'],
    'form-elements': ['./pages/form-elements/FormElements.js'],
    'headers-footers': ['./pages/headers-footers/HeadersFooters.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash].js',
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
          to: path.resolve(__dirname, 'dist/assets'),
        },
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
      template: './pages/index/index.pug',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'search-room.html',
      template: './pages/search-room/search-room.pug',
      chunks: ['search-room'],
    }),
    new HtmlWebpackPlugin({
      filename: 'room-details.html',
      template: './pages/room-details/room-details.pug',
      chunks: ['room-details'],
    }),
    new HtmlWebpackPlugin({
      filename: 'sign-in.html',
      template: './pages/sign-in/sign-in.pug',
      chunks: ['sign-in'],
    }),
    new HtmlWebpackPlugin({
      filename: 'sign-up.html',
      template: './pages/sign-up/sign-up.pug',
      chunks: ['sign-up'],
    }),
    new HtmlWebpackPlugin({
      filename: 'colors-type.html',
      template: './pages/colors-type/colors-type.pug',
      chunks: ['colors-type'],
    }),
    new HtmlWebpackPlugin({
      filename: 'form-elements.html',
      template: './pages/form-elements/form-elements.pug',
      chunks: ['form-elements'],
    }),
    new HtmlWebpackPlugin({
      filename: 'cards.html',
      template: './pages/cards/cards.pug',
      chunks: ['cards'],
    }),
    new HtmlWebpackPlugin({
      filename: 'headers-footers.html',
      template: './pages/headers-footers/headers-footers.pug',
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
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + '/';
              },
            },
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
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
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        exclude: [/img/],
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/fonts/[name].[ext]',
            publicPath: '../',
          },
        },
      },
    ],
  },
};
