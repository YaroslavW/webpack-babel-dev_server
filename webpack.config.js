const path = require('path');

module.exports = {
	devtool: 'source-map',
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/build/'
	},
	devServer: {
		overlay: true
	},
	module: {
				rules: [
							    {
								test: /\.js|jsx$/,
								use: [
												{
													loader: 'babel-loader',
													options: {presets: ["@babel/preset-env"]}
												}
								    ]
							    }
				      ]
					}
}