const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
	// __dirname是node里面的全局变量,指向项目根目录
	// 入口文件位置
	devtool:'eval-source-map',
	entry:__dirname+'/app/main.js',
	output:{
		//打包后的文件放置的位置
		path:__dirname+'/build',
		//打包后的文件名字
		filename:'bundle.js'
	},
	devServer:{
		contentBase:'./build',
		port:'8000',
		historyApiFallback:true,
		inline:true
	},
	module:{
		rules:[
			{
				test:/(\.jsx|\.js)$/,
				use:{
					loader:"babel-loader",
				},
				exclude:/node_modules/
			},
			{
				test:/\.css$/,
				use:[
					{
						loader:"style-loader"
					},
					{
						loader:"css-loader",
						options:{
							module:true,
							localIdentName:'[name]__[local]--[hash:base64:5]'
						}
					},
					{
						loader:"postcss-loader"
					}
				]
			}
		]
	},
	plugins:[
		new webpack.BannerPlugin('版权所有，翻版必究'),
		new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        }),
        new webpack.HotModuleReplacementPlugin()
	]
};