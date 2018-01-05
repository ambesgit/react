var path=require("path");
module.exports={
entry:path.resolve(__dirname,"index.js"),
output:{
	filename:'bundle.js',
	path:path.resolve(path.join(__dirname,"dist"),"app")
},
module:{
	loaders:[

		{
			test:/\.html$/,
			loader:'html-loader'
		},
		{
			test:/\.(jpg|png)$/,
			loader:'file-loader',
			options:{
				name:'[name].[ext]',
				outputPath:'asset/img',
				publicPath:'asset/imgs'
			}
		},
		{

			test:/\.js$/,
			exclude:/node_modules/,
			loader:'babel-loader',
			query:{
				presets:["es2015", "react","env"]
			}
		},
		{
			test:/\.css$/,
			loader:'style-loader!css-loader'
		},
		{
			test:/\.json$/,
			loader:'json-loader'
		}



	]
}
};