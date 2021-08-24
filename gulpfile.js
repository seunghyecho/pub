const gulp = require("gulp");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const paths = { js: ["src/js/*.js"] };

gulp.task("concat", function () {
  return gulp
    .src("src/js/*.js")
    .pipe(uglify())
    .pipe(concat("main.min.js"))
    .pipe(gulp.dest("dist"));
});

gulp.task("default", gulp.series("concat"));
