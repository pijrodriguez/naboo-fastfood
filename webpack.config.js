const webpack = require("webpack");
const path = require("path");

var jF = path.resolve(__dirname, "js");
var bF = path.resolve(__dirname, "build");

var config = {
    entry: {
        "admin":jF+"/admin-page.js",
        "kitchen":jF+"/kitchen-page.js",
        "login":jF+"/login-page.js",
        "order":jF+"/order-page.js",
        "main":jF+"/main.js"
    },
    output:{
        filename:"[name]bundle.js",
        path:bF
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery"
        })
    ]
};

module.exports = config;