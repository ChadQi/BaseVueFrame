const path = require('path');
const  ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry:{
        //入口文件
        main:'./src/main.js'
    },
    output:{
        //输出文件的路径
        path:path.resolve(__dirname,'./dist'),
        publicPath: "/dist/",
        //输出文件的名称
        filename:'main.js'
    },
    module: {
        rules: [
            {
                test:/\.vue$/,
                loader:'vue-loader',
                options: {
                    loaders:{
                        css:ExtractTextPlugin.extract({
                            use:'css-loader',
                            fallback:'vue-style-loader'
                        })
                    }
                }
            },
            {
                test:/\.ttf$/,
                loader: "url-loader"
            },
            {
                test:/\.(gif|jpg|png|woff|svg|eot|ttf)$/,
                loader:'url-loader?limit=1024'
            },
            {
                test:/\.js$/,
                loader: "babel-loader",
                exclude:/node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use:'css-loader',
                    fallback:'style-loader',
                }),
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            'filename':'[name].css',
            'allChunks':true,
        })
    ]
};