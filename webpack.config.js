let path = require('path');

let conf = {
    entry: "./js_modules/scripts.js",
    output: {
        path: path.resolve(__dirname, "./js"),
        filename: "main.js",
        publicPath: "js/"
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
            }
        ]
    }
};

module.exports = (env, options) => {
    conf.devtool = options.mode === "production" 
                                ? false 
                                : "cheap-module-eval-source-map";
    return conf;
};