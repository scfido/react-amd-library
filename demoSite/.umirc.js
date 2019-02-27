
var path = require('path');

// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  externals: {
    "requirejs": "window.requirejs",
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: false,
      dynamicImport: { webpackChunkName: true },
      title: 'site',
      dll: true,
      routes: {
        exclude: [
        
          /components\//,
        ],
      },
    }],
  ],
}
