const path = require('path');

module.exports = {
    entry: './src/form.jsx',
    output: {
        filename: 'form.js',
        path: path.resolve(__dirname, '../site/public/js'),
        library: 'form',
        libraryTarget: 'amd'
    },
    externals: {

    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "plugins": [
                            [
                                "import",
                                {
                                    "libraryName": "antd",
                                    "style": true, // or 'css'
                                }
                            ],
                            "@babel/plugin-proposal-class-properties"
                        ]

                    }
                }
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'less-loader', // compiles Less to CSS
                    options: {
                        javascriptEnabled: true
                    }
                }]
            }
        ]
    },
};