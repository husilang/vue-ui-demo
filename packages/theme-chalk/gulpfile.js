var {series, src, dest, watch, task} = require("gulp");
var sass = require("gulp-sass");
var bem = require("postcss-bem-fix");

function compile() {
    return src("./src/*.scss")
        .pipe(sass.sync())
        .pipe(dest("./lib"));
}

task("build", compile);
task("watch", function () {
    watch("./src/*.scss", series(compile));
});
