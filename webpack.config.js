const path = require('path');
const externals = require('webpack-node-externals');

module.exports = {
    mode: 'none',
    entry: {
        main: path.resolve(__dirname, 'src/main.ts'),
        preload: path.resolve(__dirname, 'src/preload.ts'),
        renderer: path.resolve(__dirname, 'src/renderer.ts')
    },
    target: 'electron-main',
    output: {
      path: path.resolve(__dirname, './dist/'),
      filename: '[name].js'
    },
    externals:[
      externals()
    ],
    resolve: {
      extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        }
        ]
    },
}