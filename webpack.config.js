const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        'index': ['./js/index.js'],
        'search-room': ['./js/search-room.js'],
        'room-details': ['./js/room-details.js'],
        'sign-in': ['./js/sign-in.js'],
        'sign-up': ['./js/sign-up.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[contenthash].js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets'),
                    to: path.resolve(__dirname, 'dist/assets')
                }
            ],
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            filename: 'html/index.html',
            template: './pug/index.pug',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            filename: 'html/search-room.html',
            template: './pug/search-room.pug',
            chunks: ['search-room'],
        }),
        new HtmlWebpackPlugin({
            filename: 'html/room-details.html',
            template: './pug/room-details.pug',
            chunks: ['room-details'],
        }),
        new HtmlWebpackPlugin({
            filename: 'html/sign-in.html',
            template: './pug/sign-in.pug',
            chunks: ['sign-in'],
        }),
        new HtmlWebpackPlugin({
            filename: 'html/sign-up.html',
            template: './pug/sign-up.pug',
            chunks: ['sign-up'],
        }),
    ],
    module: {
        rules: [
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
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  },
                },
            },
            {
                test: /\.pug$/,
                use: {
                  loader: 'pug-loader',
                },
            },
            {
                test: /\.(gif|png|jpe?g|svg|ico)$/,
                loader: 'file-loader',
                exclude: [/fonts/],
                options: {
                    name: './img/[name].[ext]',
                },
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                exclude: [/pug/, /img/],
                use: {
                    loader: 'file-loader',
                    options: {
                        name: './fonts/[name].[ext]',
                    }
                }
            },
        ],
    },
};