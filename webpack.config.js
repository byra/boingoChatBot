const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackDashboard = require('webpack-dashboard/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");





module.exports = {

    entry: "./src/configurations/index.js",

    output: {
        path: path.join(__dirname, "./dist"),
        publicPath: "",
        filename: "bundle.js"
    },

    devServer: {
        quiet: true,
        port: 6060
    },

    module: {
        loaders: [
            {test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader", query: {presets: ["env", "react"]}},
            {test: /\.scss$/, loader: "style-loader!css-loader!sass-loader"},
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.(png|jpg|gif|svg)$/, loader: "file-loader"}
        ]
    },

    plugins: [
        new webpackDashboard(),
        new BundleAnalyzerPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        new DuplicatePackageCheckerPlugin(),
        new HtmlWebpackPlugin({filename: "index.html", template: "./src/assets/index.html"})
    ]
};