/* eslint-disable*/
process.env.NODE_ENV = 'production';
const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = require('./config');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

const webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    optimization: {
      minimize: false
    },
    // 输出
    output: {
        path: resolve('dist'),
        // publicPath: '/dist/',
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html',
        }),
    ]
});
module.exports = webpackConfig;
