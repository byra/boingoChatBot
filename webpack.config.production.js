const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpackDashboard = require('webpack-dashboard/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");

module.exports = {

    entry:"./src/configurations/index.js",

    output:{
        path:path.join(__dirname,"./dist"),
        filename:"bundle.js"
    },

    module:{
        loaders:[
            {test:/\.jsx?$/, exclude:/node_modules/, loader:"babel-loader", query:{presets:["env","react"]}},
            {test:/\.css$/, loader:ExtractTextPlugin.extract("css-loader", "style-loader")},
            {test:/\.(png|jpg|gif|svg)$/, loader:"file-loader"}
        ]
    },

    plugins:[
        new webpackDashboard(),
        new BundleAnalyzerPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        new DuplicatePackageCheckerPlugin(),
        new HtmlWebpackPlugin({filename:"index.html", template:"./src/assets/index.html"}),
        new ExtractTextPlugin("style.css"),
        new webpack.optimize.UglifyJsPlugin({ mangle: false })
    ]
};