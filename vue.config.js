const path = require("path");
const PrerenderSpaPlugin = require("prerender-spa-plugin");
const MarkdownItContainer = require("markdown-it-container");
const cheerio = require('cheerio');
const striptags = (str, tags) => {
    const $ = cheerio.load(str, { decodeEntities: false })

    if (!tags || tags.length === 0) {
        return str
    }

    tags = !Array.isArray(tags) ? [tags] : tags;
    let len = tags.length;

    while (len--) {
        $(tags[len]).remove()
    }

    return $.html()
};
const convertHtml = function (str) {
    return str.replace(/(&#x)(\w{4});/gi, $0 => String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16)))
};
const wrapCustomClass = function (render) {
    return function (...args) {
        return render(...args)
            .replace('<code class="', '<code class="hljs ')
            .replace('<code>', '<code class="hljs">')
    }
};
const vueMarkdown = {
    raw: true,
    preprocess: (MarkdownIt, source) => {
        MarkdownIt.renderer.rules.table_open = function () {
            return '<table class="table">'
        };
        MarkdownIt.renderer.rules.fence = wrapCustomClass(MarkdownIt.renderer.rules.fence);

        // ```code`` 给这种样式加个class code_inline
        const code_inline = MarkdownIt.renderer.rules.code_inline;
        MarkdownIt.renderer.rules.code_inline = function(...args){
            args[0][args[1]].attrJoin('class', 'code_inline');
            return code_inline(...args)
        };
        return source
    },
    use: [
        [MarkdownItContainer, 'demo', {
            validate: params => params.trim().match(/^demo\s*(.*)$/),
            render: function(tokens, idx) {
                if (tokens[idx].nesting === 1) {
                    const html = convertHtml(striptags(tokens[idx + 1].content, 'script'));
                    // 移除描述，防止被添加到代码块
                    tokens[idx + 2].children = [];

                    return `<demo-block>
                        <div slot="desc">${html}</div>
                        <div slot="highlight">`;
                }
                return '</div></demo-block>\n';
            }
        }]
    ]
};
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
            .options(vueMarkdown);
        config.module.rule("vue")
            .test(/\.vue/)
            .use("vue-loader")
            .loader("vue-loader")
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