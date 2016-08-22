const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;
const PATHS = {
    VENDORS: path.resolve('src/vendors.ts'),
    MAIN: path.resolve('src/main.browser.ts'),
    POLYFILLS: path.resolve('src/polyfills.ts'),
    ASSETS: path.resolve('src/assets/scss'),
    OUTPUT: path.resolve('.build-output')
};

module.exports = {
    entry: {
        'polyfills': PATHS.POLYFILLS,
        'vendor': PATHS.VENDORS,
        'main': PATHS.MAIN
    },
    output: {
        path: PATHS.OUTPUT,
        filename: '[name]-[hash].js'
    },
    resolve: {
        plugins: [new TsConfigPathsPlugin()],
        extensions: ['', '.json', '.js', '.ts', '.scss', '.html']
    },
    module: {
        loaders: [{
            test: /\.ts?$/,
            loaders: ['awesome-typescript-loader', 'angular2-template-loader']
        }, {
            test: /\.html?$/,
            loaders: ['raw']
        }, {
            test: /\.scss?$/,
            loaders: ['raw', 'sass']
        }, {
            test: /main.scss$/,
            loaders: [StyleExtHtmlWebpackPlugin.inline(), 'postcss-loader', 'sass']
        }, {
            test: /\.json?$/,
            loaders: ['json']
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file?name=src/assets/fonts/[name].[ext]'
        }]
    },
    sassLoader: {
        includePaths: [PATHS.ASSETS]
    },
    plugins: [
        new CleanWebpackPlugin(['.build-output'], {
            root: process.cwd()
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            favicon: 'src/assets/favicon.ico',
            chunksSortMode: 'dependency',
            cache: false
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        }),
        // new StyleExtHtmlWebpackPlugin(),
        new webpack.optimize.CommonsChunkPlugin(['vendor', 'polyfills']),
        new webpack.NoErrorsPlugin()
    ]
};
