# React组件开发

本项目示例了以下几项技术：

- 从外部JS文件ADM格式包中加载React组件
- 将组件打包AMD模块
- 集成Docz开发组件，制作组件示例和说明文档
- 集成组件单元测试

## 从外部JS加载React组件

这是一种比较特殊的用法，是解决多模块应用相互调用问题。例如一个工作流程项目，流程处理页面需要加载其它应用模块的表单组件，我们就可以将应用模块的表单组件单独发布一个表单js文件，工作流中使用Requirejs动态加载表单js，实现流程和应用表单分离的效果。

实现代码参见`demoSite`
核心代码如下：

```js
componentDidMount() {
    requirejs(["form"], (Form) => {
        this.setState({ Form: <Form.default>从JS加载的表单</Form.default> })
    });
}
```

## 将组件打包AMD模块

将React组件打包为AMD模块，可以在浏览器中使用[RequireJS](https://requirejs.org/)动态加载，该方案虽然打包文件稍大，但是可以实现在Webpack打包发布以后的动态加载。

实现代码参见`component`项目

打包操作：  
在component项目目录下。

```sh
npm build
```

打包文件输出到`component/dist`目录。

## 集成Docz

开发过程中需要组件调试通常要一个页面来承载组件，我们选用Docz来承载，Docz使用`mdx`文件格式，结合了Markdown和jsx两种技术，组件承载页面也是说明文档。

component项目中会把`*.mdx`文档编译生成文档网站，并且支持热更新。

开发时运行`yarn docz dev`启动Docz开发服务，访问<http://127.0.0.1:3000>就可以查看组件页面。页面内容参考`component/src/Form/index.mdx`

![界面示例](/assets/README/img/2019-02-27-11-45-30.png)

组件需要访问服务端数据时，可以在`component/mock`目录下添加mock数据，设置方式参考<https://umijs.org/guide/mock-data.html>

## 单元测试

执行`yarn test`时，会遍历组件的`__test__`目录，执行其中的`*.test.js`文件。