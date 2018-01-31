const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './js/app.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/dist/',
        filename: '[name].bundle.js',
    },
    devServer: {
        contentBase: './dist',
        inline: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            use: [{
                loader: 'babel-loader',
                options: {
                    plugins: ['transform-runtime']
                }
            }]
        },
         { 
            test: /\.hbs$/,
            loader: "handlebars-loader" }]
    },
    // externals: {
    //     'jquery': 'jquery'
    // },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
        // ,new webpack.optimize.UglifyJsPlugin({
        //     minimize: true,
        //     compress: false
        // })
    ]
};