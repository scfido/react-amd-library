import mock from "docz-plugin-mock"

export default {
    title: "组件文档",
    description: "常用组件使用说明",
    plugins:[
        mock()
    ],
    modifyBundlerConfig: bundlerConfig => {
        const rules = [
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
        ];
        bundlerConfig.module.rules.push(...rules);
        return bundlerConfig;
    }
}