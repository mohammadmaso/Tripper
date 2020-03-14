const webpack = require("webpack");
const path = require("path");

const config = {
    entry: ["react-hot-loader/patch", "./src/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "less-loader" // compiles Less to CSS
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: "file-loader"
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "fonts/"
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "react-dom": "@hot-loader/react-dom"
        }
    },
    devServer: {
        contentBase: "./dist"
    }
};

module.exports = config;
