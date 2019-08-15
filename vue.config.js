const path = require("path");
const PrerenderSpaPlugin = require("prerender-spa-plugin");
module.exports = {
    pages: {
        index: {
            entry: "examples/main.js",
            template: "public/index.html",
            filename: "index.html"
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set("@", path.resolve("examples"))
            .set("~", path.resolve("packages"));
        config.module
            .rule("js")
            .include.add("/packages")
            .end()
            .include.add("/examples")
            .end()
            .use("babel")
            .loader("babel-loader");
        config.module.rule("md")
            .test(/\.md/)
            .use("vue-loader")
            .loader("vue-loader")
            .end()
            .use("vue-markdown-loader")
            .loader("vue-markdown-loader/lib/markdown-compiler")
            .options({
                raw: true
            });
    },
    configureWebpack: {
        plugins: [
            new PrerenderSpaPlugin({
                staticDir: path.join(__dirname, '../dist'),
                routes: ['/']
            })
        ]
    }
};