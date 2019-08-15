## 项目开始 (未完待续)
---

项目的初衷是学习怎么封装一个基于Vue的UI组件库，顺便记录每个步骤，以及在此过程中遇到的难点及体会。
<br>
参考文章：[从零开始搭建Vue组件库 VV-UI](https://zhuanlan.zhihu.com/p/30948290)

### ①项目搭建
**使用 vue cli 3.0.0版本以上**，在node或cmd中输入以下命令创建项目
```js
vue create project-name
```
选择 Manually select features
<br>
选择Babel，Router，Vuex，CSS Pre-processors，Unit Testing
<br>
选择Sass/SCSS(with node-sass)
<br>
选择Mocha + Chai
<br>
选择In dedicated config files
<br>
以上来安装（按需选择）
<br>
运行如下命令：
```js
cd project-name
npm run serve
```
看项目是否成功启动，启动成功恭喜你完成第一小步~

### ②目录结构修改
src目录修改为examples，用来组件示例
<br>
在examples目录下，新建docs文件夹，用来编写各组件的文档
<br>
在项目下新增packages文件夹，用来存放封装的组件

### ③增加配置文件
由于修改了目录结构，需要修改相关配置
<br>
在项目根目录下，增加配置文件vue.config.js，代码如下：
```js
const path = require("path");
module.exports = {
    pages: {
        index: {
            entry: "examples/main.js", // js入口文件修改
            template: "public/index.html",
            filename: "index.html"
        }
    },
    chainWebpack: config => {
        // 重新设置目录别名
        config.resolve.alias
            .set("@", path.resolve("examples"))
            .set("~", path.resolve("packages"));
        // 使 examples及packages目录下的js文件都加入编译
        config.module
            .rule("js")
            .include.add("/packages")
            .end()
            .include.add("/examples")
            .end()
            .use("babel")
            .loader("babel-loader");
    },
}
```
运行npm run serve 查看是否能成功启动


### ④编写第一个组件
接下来，就是要封装第一个组件，由于此文档的重点不是讲解组件怎么封装，那我们就先写一个简单的组件用来测试好了。
<br>
编写组件前，我先去了解了一下css命名规范[BEM](https://www.w3cplus.com/css/css-architecture-1.html)。
<br>

### ⑤编写第一个组件的文档
我真的是小白，对md的写法一窍不通，所以先去了解了md文件的常见语法，参考文章：[如何写md格式的文档](https://www.jianshu.com/p/f378e3f2e7e1?tdsourcetag=s_pcqq_aiomsg)
<br>
了解了一下[markdown-it](https://markdown-it.docschina.org/)，还是不够明白，只能照着大神的代码去写，然后了解每行代码是做什么的。
<br>
