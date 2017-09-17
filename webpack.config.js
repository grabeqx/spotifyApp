var path = require('path');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');


module.exports = {
    entry: {
        main: path.join(__dirname, '/src/main.jsx'),
        vendor: path.join(__dirname, '/src/vendor.js')          
    },
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: 'http://localhost/',
        filename: '[name].js',
    },
    plugins: [
        new ExtractTextWebpackPlugin("style.css"),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: 'body',
			filename: 'index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
          })
    ],
    resolve: {
        extensions : ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel-loader']
            },
            {
				test: /\.css$/,
				use: ExtractTextWebpackPlugin.extract({
                    fallback:'style-loader',
                    use: 'css-loader'
                })
            },
            {
				test: /\.scss$/,
				use: ExtractTextWebpackPlugin.extract(['css-loader', 'sass-loader'])
            },
            { test:  /\.(jpg|png|svg)$/, use: [ "file-loader" ] },
            { 
                test:  /\.(jpg|png|svg)$/, 
                include : path.join(__dirname, 'assets'),
                use: [ "url-loader?limit=30000&name=images/[name].[ext]" ] 
            }
        ]
    },
    devServer: {
        host: 'localhost',
        port: 80,
        hot: true,
        historyApiFallback: true
    }

}