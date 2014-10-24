var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        test: path.join(__dirname, "src", "entry.js")
    },
    output: {
        path: path.join(__dirname, "output"),
        filename: "[name].js",
        sourceMapFilename: "[file].map"
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin()
    ]
};
