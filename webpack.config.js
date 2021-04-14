const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDev? 'development' : 'production',
    devtool: isDev? 'eval-source-map': 'source-map',
    entry: path.resolve(__dirname,'src','index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'public','index.html')
        })
    ],
    resolve: {
        extensions: ['.js','.jsx']
    },
    devServer: {
        contentBase: path.resolve(__dirname,'public')
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader','css-loader','sass-loader']
            }
        ]
    }
}