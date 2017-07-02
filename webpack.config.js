var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var copyPatterns = [
    { from: 'src/index.html' },
    { from: 'src/css', to: 'css' } /*,
    { from: 'src/favico.ico' },
    { from: 'src/images', to: 'images' },
    { from: 'data', to: 'data' }*/
];

module.exports = {
    //context: __dirname + "/src/src/js",
    entry: [ "./src/src/js/App.js" ],
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin(copyPatterns, {}),
        new HtmlWebpackPlugin({
            inject: true,
            template: __dirname + '/src/index.html'
        })
    ]
};
