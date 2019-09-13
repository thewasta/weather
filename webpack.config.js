const path = require('path');
const htmlwebpackplugin = require('html-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, 'src', 'app', 'index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new htmlwebpackplugin(
            {
                template: './src/index.html'
            }
        )
    ]
};