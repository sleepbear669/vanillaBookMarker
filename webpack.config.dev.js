var HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpack = require('webpack');

module.exports = {
    entry: {
        index: "./src/index.js"
    },
    output: {
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-2']
                }
            },
            {
                test: /\.scss$/,
                loaders: [ExtractTextPlugin.extract("style-loader", "css"), "css", "sass"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['app']),
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};