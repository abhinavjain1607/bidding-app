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
		}, {
			test: /\.sass$/,
			loaders: ['style?sourceMap', 'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]', 'sass?sourceMap']
		}, {
			test: /\.css$/,
			loader: 'style!css?sourceMap'
		}, {
			test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
			loader: "url?limit=10000&mimetype=application/font-woff"
		}, {
			test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
			loader: "url?limit=10000&mimetype=application/font-woff"
		}, {
			test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
			loader: "url?limit=10000&mimetype=application/octet-stream"
		}, {
			test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
			loader: "file"
		}, {
			test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
			loader: "url?limit=10000&mimetype=image/svg+xml"
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};
