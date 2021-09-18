const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "src/index.tsx"),
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[contenthash].bundle.js",
    },
    mode: "development",
    plugins: [new HtmlWebpackPlugin({
       template: path.join(__dirname, "public", "index.html")
    })],
    devServer: {
        port: 3000,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.m?js|jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: { // our code will be compatible with Internet Explorer 11
                        presets: ["@babel/preset-react", ["@babel/preset-env", { "targets": "IE 11" }]]
                    }
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                "style-loader",
                "css-loader"
                ],
            }
              
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
}