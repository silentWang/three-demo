const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry:'./src/Main.ts',
    output:{
        path:path.resolve(__dirname,'./public'),
        filename:'app.bundle.js'
    },
    devServer:{
		//设置服务器访问的基本目录
        contentBase:path.resolve(__dirname,'./public'),
        host:'172.18.27.110',
        port:1222, // 设置端口号
		inline:true //自动拉起浏览器
	},
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use:'ts-loader',
                exclude:/node_modules/
            },
            {
                test:/\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use:{
                    loader:'file-loader',
                    options:{
                        name:'[name].[ext]',
                        outputPath:'assets/'
                    }
                }
            }
        ]
    },
    resolve:{
        extensions:['.ts','.tsx','.js']
    },
    devtool:"eval",
    plugins:[
        new HtmlWebpackPlugin({
            template:'index.html'
        })
    ]
}