const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    entry:"./src/configurations/index.js",

    output:{
        path:path.join(__dirname,"./dist"),
        publicPath: "",
        filename:"bundle.js"
    },

    devServer:{
        port:6060
    },

    module:{
        loaders:[
            {test:/\.jsx?$/, exclude:/node_modules/, loader:"babel-loader", query:{presets:["env","react"]}},
            {test:/\.css$/, loader:"style-loader!css-loader"},
            {test:/\.(png|jpg|gif)/, loader:"file-loader"}
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({filename:"index.html", template:"./src/assets/index.html"})
    ]
};