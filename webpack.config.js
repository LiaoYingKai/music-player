const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module:{
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }, {
            test: /\.(css|scss)$/,
            use: ['style-loader', 
            'css-loader', 
            'sass-loader' 
            ]
        }, {
            test: /\.(jpe?g|png|gif|svg)$/,
            use: [
            {
                loader: 'url-loader',
                options: { limit: 40000 }
            },
            'image-webpack-loader'
            ]
        }]
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        historyApiFallback: true
    },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'src', 'index.html')
        })
    ],
}
