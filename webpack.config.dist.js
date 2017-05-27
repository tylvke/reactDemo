/**
 * Created by wangshuo on 2017/3/7.
 */
var path = require('path');
var webpack=require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
var HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports = {
    entry: {
        app:path.resolve(__dirname, 'src/App.jsx'),
        common: [
        "react",
        'react-dom'
        ]
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].[chunkhash:6].js',
        publicPath: '/',
        chunkFilename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /^node_modules$/,
            loader: 'babel',
        }, {
            test: /\.css$/,
            exclude: /^node_modules$/,
            loader: ExtractTextPlugin.extract('style', ['css', 'autoprefixer'])
        }, {
            test: /\.less$/,
            exclude: /^node_modules$/,
            loader: ExtractTextPlugin.extract('style', ['css', 'autoprefixer', 'less'])
        }, {
            test: /\.scss$/,
            exclude: /^node_modules$/,
            loader: ExtractTextPlugin.extract('style', ['css', 'autoprefixer', 'sass'])
        }, {
            test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
            exclude: /^node_modules$/,
            loader: 'file-loader?name=[name].[ext]'
        }, {
            test: /\.(png|jpg|gif)$/,
            exclude: /^node_modules$/,
            loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
            //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图
        },{
            test: /\.jsx$/,
            exclude: /^node_modules$/,
            loaders: ['jsx', 'babel']
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production') //定义生产环境
            }
        }),
        new HtmlWebpackPlugin({  //根据模板插入css/js等生成最终HTML
            filename: './index.html', //生成的html存放路径，相对于 path
            template: './src/index.html', //html模板路径
            hash: false
        }),
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.CommonsChunkPlugin("common", "common.bundle.js"),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false, // remove all comments
            },
            compress: {
                warnings: false
            }
        })],
    resolve: {
        extensions: ['', '.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
    }

}
