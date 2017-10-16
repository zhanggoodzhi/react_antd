const path = require('path');
const rootPath = path.resolve(__dirname, '../');

module.exports = {
    entry: './src/index',
    output: {
        path: path.resolve(rootPath, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(rootPath, 'src')
        ],
        extensions: [".js", ".json", ".jsx", ".css"],
    },
    module: {
        rules: [{
                test: /\.css$/,
                loader: "babel-loader",
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "react"]
                },
            }
        ]
    },
};