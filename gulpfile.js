const gulp = require("gulp");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const paths = { js: ["src/js/*.js"] };

// minify
gulp.task("uglify", function () {
  return gulp
    .src(paths.js)
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist"));
});

// watch
gulp.task("watch", function () {
  gulp.watch(paths.js, gulp.series("uglify"));
});

//gulp를 실행하면 default 로 uglify task를 실행
gulp.task("default", gulp.parallel("uglify", "watch"));
