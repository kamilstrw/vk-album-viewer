const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack'); 
const path = require('path');

const PRODUCTION = process.env.NODE_ENV === "production";

const extractSass = new ExtractTextPlugin({
    filename: "assets/css/main.css"
});
const extractCSS = new ExtractTextPlugin({
	filename: "assets/css/plugins.css"
});

module.exports = {
	devtool: PRODUCTION ? false : "cheap-inline-module-source-map",
	mode: "development",
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname),
		filename: 'assets/js/bundle.js',
		publicPath: '/'
	},
	watch: true,
	devServer:
	{
		contentBase: path.join(__dirname),
		port: 80,
		compress: true,
		historyApiFallback: true,
		headers: {
	        "Access-Control-Allow-Origin": "*",
    		"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    		"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
   		}
	},
	module: {
		rules: [
			{
	        	test: /\.jsx?$/,
	        	loader: 'babel-loader',
	        	exclude: /node_modules/,
	        	query: 
	     		  {
	       			presets: [ "@babel/preset-env", "@babel/preset-react"],
	       			plugins: [["@babel/plugin-proposal-decorators", { "legacy": true }]]
	     		  }
	     	},
			{
				test: /\.scss?$/,
				use: extractSass.extract({
					use: [{
			            loader: "css-loader"
			            }, {
			            loader: "sass-loader"
		            }],
		            fallback: "style-loader"
		        })
				
			},
			{
				test: /\.css?$/,
				use: extractCSS.extract(["css-loader"])			
			},
		    {
		        test: /\.(woff|woff2|eot|ttf|svg)$/,
			    exclude: /node_modules/,
			    use: {
			        loader: 'url-loader?limit=10000&name=/fonts/[name].[ext]'
			      }
		    },
		    {
		        test: /\.png$/,
		        use: 'url-loader?name=images/[name].[ext]&limit=8192&mimetype=image/png'
		    },
		    {
		        test: /\.jpe?g$/,
		        use: 'url-loader?name=images/[name].[ext]&limit=8192&mimetype=image/jpg'
		    },
		    {
		        test: /\.gif$/,
		        use: 'url-loader?limit=8192&mimetype=image/gif'
		    }
		]
	},
	plugins: [
	new HtmlWebpackPlugin({
	      template: "./src/index.html",
	      filename: "index.html"
	    }),
		extractCSS,
		extractSass
	],
	resolve: {
		alias: {
			"JS": path.resolve(__dirname, "src", "js"),
			"Styles": path.resolve(__dirname, "src", "scss"),
		}    
	}
}