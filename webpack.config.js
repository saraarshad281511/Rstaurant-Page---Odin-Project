const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",

    entry: "./src/index.js",

    devtool: "inline-source-map",

    devServer: {
        static: "./dist",
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            scriptLoading: "defer",
        }),
    ],

    output: {
        clean: true,
    },
};