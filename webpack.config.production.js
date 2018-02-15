const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
        new HtmlWebpackPlugin({filename:"index.html", template:"./src/assets/index.html"}),
        new ExtractTextPlugin("style.css"),
        new webpack.optimize.UglifyJsPlugin({ mangle: false })
    ]
};