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
			loader: 'babel',
			query: {
				presets: ['es2015','react']
			}
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};
