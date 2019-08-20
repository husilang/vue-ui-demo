## 项目搭建 (二)
---

接下来的步骤，就是组件库的发布，迭代更新。
<br>
以及我想更加丰富的东西，scss的bem风格设置，组件的单元测试，组件库的样式主题，组件库的国际化...

### ①scss的bem风格设置
在packages目录下新建UI库样式组件theme-chalk
<br>
在theme-chalk下新建src文件夹，用来存放源文件。并在theme-chalk下运行命令"npm init"，来初始化一个package.json文件。
<br>
运行命令
```js
npm install gulp gulp-postcss gulp-sass postcss-bem-fix postcss-nested -D
```
新建gulpfile.js文件
<br>
packages/theme-chalk/gulpfile.js 代码如下
```js
var {series, src, dest, watch, task} = require("gulp");
var sass = require("gulp-sass");
var bem = require("postcss-bem-fix");
var nested = require("postcss-nested");
var postcss = require("gulp-postcss");

function compile() {
    var processors = [
        bem(),
        nested()
    ];
    return src("./src/*.scss") // 源文件
        .pipe(sass.sync())  // 编译scss文件
        .pipe(postcss(processors)) // bem和suit风格代码转化成我们需要的css
        .pipe(dest("./lib")); // 输出目录
}

task("build", compile);
task("watch", function () {
    watch("./src/*.scss", series(compile));
});

```
在theme-chalk/src下新建index.scss文件，测试是否能成功转换，代码如下
```
@component-namespace zm {
  @component row {
    position: relative;
  }
}
```
在theme-chalk/package.json文件中，修改scripts命令
```
"scripts": {
    "dev": "gulp build && gulp watch",
    "build": "gulp build"
  }
```
在theme-chalk目录下运行"npm run dev"，查看theme-chalk下是否生成了新文件夹lib,以及lib/index.css文件。
<br>
查看theme-chalk/lib/index.css代码是否如下
```
.zm-row {
    position: relative
}
```
则转换成功，大功告成~
<br>
参考文章：[PostCSS深入学习: 结合BEM和SUIT方法使用PostCSS](https://www.w3cplus.com/PostCSS/using-postcss-with-bem-and-suit-methodologies.html)