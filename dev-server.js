var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
// requiring my webpack configuration
var config = require('./webpack.config.js');
var path = require('path');

var compiler = webpack(config);
// then spinning up a new dev server with some settings
var server = new WebpackDevServer(compiler, {
	hot: true,
	filename: config.output.filename,
	publicPath: config.output.publicPath,
	proxy: {
		"/getMail": 'http://localhost:80/magdan/php/mailer.php',
		"/getProducts": 'http://localhost:80/magdan/php/products.php'
	},
	stats: {
		colors: true
	},
	historyApiFallback: {
	  disableDotRule: true
	}
});

// its gonna listen to port 8080
server.listen(8080, 'localhost', function() {
	console.log("Starting server on http://localhost:8080");
});
