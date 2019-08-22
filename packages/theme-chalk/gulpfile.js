var {series, src, dest, watch, task} = require("gulp");
var sass = require("gulp-sass");
var bem = require("postcss-bem-fix");
var nested = require("postcss-nested");
var postcss = require("gulp-postcss");

function compile() {
    var processors = [

        bem({
            defaultNamespace: 'zm',
            style: 'suit',
            shortcuts: {
                component: "b",
                modifier: "m",
                descendent: "e",
                state: 'when',
                utility: 'util'
            }
        }),
        nested(),
    ];
    return src("./src/*.scss")
        .pipe(sass.sync())
        .pipe(postcss(processors))
        .pipe(dest("./lib"));
}

task("build", compile);
task("watch", function () {
    watch("./src/*.scss", series(compile));
});
