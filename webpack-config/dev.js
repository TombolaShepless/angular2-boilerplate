module.exports = {
    debug: true,
    devtool: 'cheap-module-source-map',
    devServer: {
        host: '0.0.0.0',
        hot: true,
        inline: true,
        historyApiFallback: true,
        compress: true,
        open: true
    }
};
