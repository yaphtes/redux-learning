'use strict';

const path = require('path');

module.exports = {
    entry: './src/index.jsx',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['react-hot-loader', 'babel-loader']
            }
        ]
    },

    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: {'^api/': ''}
            }
        }
    },

    devtool: 'inline-source-map',

    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    }
};