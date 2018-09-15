var webpack = require('webpack');
var path = require('path');
var HTMLPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development",
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        inline: true,
        contentBase: path.join(__dirname, 'dist'),
        overlay: true,
        stats: "errors-only"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                use: {
                    loader: "babel-loader",
                    // exclude: path.join( __dirname, 'node_modules' ),
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-typescript',
                            '@babel/preset-react',
                        ],
                        plugins: [
                            '@babel/plugin-proposal-function-bind',
                            '@babel/plugin-syntax-dynamic-import',
                            ["@babel/plugin-proposal-decorators", { legacy: true }],
                            ["@babel/plugin-proposal-class-properties", { loose: true }],
                            'react-hot-loader/babel'
                        ]
                    }
                }
            },
        ]
    },
    plugins: [
        new HTMLPlugin({
            template: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};
//# sourceMappingURL=webpack.config.js.map