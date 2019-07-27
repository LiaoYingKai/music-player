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
            test: /\.(css)$/,
            use: ['style-loader', // creates style nodes from JS strings
              'css-loader', // translates CSS into CommonJS
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
