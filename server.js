var webpack = require("webpack");
var path = require("path");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config");

var server = new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath
});

server.use("/", function (req, res) {
	res.sendFile(path.join(__dirname + "/index.html"));
});

server.listen(3000, "0.0.0.0", function (err, result) {

	if (err) {
		console.log(err);
	}

	console.log("Running at http://0.0.0.0:3000");
});
