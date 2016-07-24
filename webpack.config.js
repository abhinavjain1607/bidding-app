var path = require('path');
module.exports = {
	context: __dirname + '/app',
	entry: "./index.js",
	output: {
		path: __dirname + '/build',
		filename: "bundle.js"
	},
	devtool: "source-map",
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loaders: ['babel?presets[]=es2015,presets[]=react,presets[]=survivejs-kanban']
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};
