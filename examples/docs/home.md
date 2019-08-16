## 项目开始 (未完待续)
---

项目的初衷是学习怎么封装一个基于Vue的UI组件库，顺便记录每个步骤，以及在此过程中遇到的难点及体会。
<br>
参考文章：[从零开始搭建Vue组件库 VV-UI](https://zhuanlan.zhihu.com/p/30948290)
<br>
下面是我个人的一个项目搭建流程，希望能帮助大家。

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
由于修改了目录结构，需要修改相关配置，这里参考vue cli官网。
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
看了几篇关于BEM的文章后，还是比较模糊，实践出真知，在以后的组件封装中，我会慢慢去使用这种规范。
<br>
#### 在packages下封装一个test组件
在packages下新建一个文件夹test，test目录下新建index.js文件以及src/test.vue，如下：
<br>
在packages/test/src/test.vue中
```js
<template>
    <div class="zm-test" :style="{backgroundColor: bgColor}"></div>
</template>

<script>
    export default {
        name: 'ZmTest',
        props: {
            bgColor: {
                type: String,
                default: "#ccc"
            }
        }
    }
</script>

<style lang="scss">
    .zm-test {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        animation: zm-opacity 2s infinite linear;
    }
    @keyframes zm-opacity{
        0% {opacity:1}
        10%,90%{opacity:.8}
        20%,80%{opacity:.7}
        30%,70%{opacity:.5}
        40%,60%{opacity:.3}
        50%{opacity:0}
        100%{opacity:.95}
    }
</style>
```
在packages/test/index.js中
```js
import ZmTest from './src/test.vue'

// 支持按需引用
ZmTest.install = function (Vue) {
  Vue.component(ZmTest.name, ZmTest);
};

export default ZmTest;
```

#### 在packages下新建index.js
在packages/index.js中
```js
import ZmTest from './test/index'

const components = [
    ZmTest
];

const install = function (Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
};

if (typeof window.Vue !== "undefined" && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    ZmTest
}
```
#### 在examples下引用示例
在examples/main.js中
```js
// do something...

import ZmUI from '../packages/index'

Vue.use(ZmUI);

// do something...
```
在examples/views/Home.vue中引用test组件
```js
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <zm-test bgColor="blue"></zm-test>
  </div>
</template>

<script>
// @ is an alias to /examples
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
```
启动程序后，在"http://localhost:8080/#/home"可以看到我们封装的test组件能正常使用了~

### ⑤编写第一个组件的文档
小白对md的写法一窍不通...所以先去了解了md文件的常见语法，参考文章：[如何写md格式的文档](https://www.jianshu.com/p/f378e3f2e7e1?tdsourcetag=s_pcqq_aiomsg)。
<br>
此过程分为两步，第一步使.md文件正常展示，第二步使组件代码能在.md文件中展示运行结果以及示例代码。
#### 编写文档
在examples/docs下新建一个test.md文件，随意写点介绍，如下：
```html
# Test

Test组件是用来测试md文档是否能在项目中像vue文件一样正常展示
```
#### 安装工具
对md文件需要一个编译工具--vue-markdown-loader
<br>
在本项目下，用命令行工具运行以下命令
```js
npm run vue-markdown-loader -D
```
#### 修改配置文件
修改vue.config.js，使md文件能像vue文件一样在项目里展示
```js
// do something...

module.exports = {
    // do something...

    chainWebpack: config => {
        // do something...

        // 使用vue-markdown-loader
        config.module.rule("md")
            .test(/\.md/)
            .use("vue-loader")
            .loader("vue-loader")
            .end()
            .use("vue-markdown-loader")
            .loader("vue-markdown-loader/lib/markdown-compiler")
    },

    // do something...
}
```
#### 添加路由
在router.js里添加测试文档的路由
```js
// do something...

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        },
        {
            path: '/test',
            name: 'test',
            component: () => import('../docs/test.md')
        }
    ]
})
```
#### 查看结果
重新启动程序（<span style="color:red;">注意，只要修改了vue.config.js文件，程序都需要重新启动</span>），打开"http://localhost:8080/#/test"可以看到test.md能正常展示了~
<br>
到这里，第一步就结束了。

#### 组件在文档中的示例与代码展示
开始第二步。
<br>
以上，我们完成了md文件的正常展示，但是我们需要的是可以在文档中能直观看到封装的组件某段代码示例及运行结果示例。
<br>
了解了一下[markdown-it](https://markdown-it.docschina.org/)，还是不够明白，只能照着大神的代码去写，然后了解每行代码是做什么的。
<br>

### ⑥让项目在github上演示
项目已经完成一小半了，我已经迫不及待将它传到github上记录下来。
<br>
在本地我能直观地看到我的项目成果了，现在希望能在github上有个演示地址，让别人也能直观地看到我的项目展示。通过github文档及相关资料搜索，我找到了解决方案。如下：
<br>
#### 安装工具
在项目下安装gh-pages工具
```js
npm install gh-pages -D
```
#### 增加部署命令
package.json文件修改scripts命令
```js
"scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "test:unit": "vue-cli-service test:unit",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
```
#### 修改配置
vue.config.js需要修改publicPath配置
```js
module.exports = {
    // do something...
    publicPath: process.env.NODE_ENV === 'production' ? '/project-name/' : '/', //由于我的项目在github上名为zm-ui,所以我的project-name为zm-ui
    // do something...
}
```

#### 打包部署
在node或cmd运行以下命令
```js
npm run deploy
```
看到"Published"恭喜你部署成功，接下来可以到github上查看你的项目，是否多了一个分支gh-pages

#### 在github上修改项目设置
在github你的项目下，找到"Settings"下的"GitHub Pages", "Source"选择"gh-pages branch"保存成功后，就拥有演示地址了~~

参考文章：[https://segmentfault.com/a/1190000017084155](https://segmentfault.com/a/1190000017084155)
