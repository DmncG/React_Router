var path = require('path');

module.exports = {
	entry : './src/main.js',
	output: {
		path: __dirname,
		filename : 'bundle.js'
	},
	module : {
		loaders : [
			{
				test: /\.js?$/,
				loaders: ['babel-loader'],
				include: path.join(__dirname, 'src') 
			},
			{
				test: /\.scss?$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	}
}