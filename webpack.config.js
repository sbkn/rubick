var path = require("path");
var webpack = require("webpack");

module.exports = {
	devtool: "cheap-module-source-map",
	entry: [
		"webpack-dev-server/client?http://localhost:3000",
		"./src/index.jsx"
	],
	output: {
		path: path.join(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "/build/"
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		})
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: ["babel"],
				include: path.join(__dirname, "src")
			},
			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
			}
		]
	},
	devServer: {
		historyApiFallback: {
			index: "/build/"
		}
	}
};
