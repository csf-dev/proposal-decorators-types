module.exports = {
    entry: './src/index.js',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: { loader: 'babel-loader' }
            }
        ]
    }
}