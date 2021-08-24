const gulp = require("gulp"),
  uglify = require("gulp-uglify"),
  concat = require("gulp-concat"),
  minifycss = require("gulp-minify-css"),
  htmlmin = require("gulp-htmlmin"),
  browserSync = require("browser-sync").create();

gulp.task("server", function () {
  return browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });
});

gulp.task("htmlmin", function () {
  return gulp
    .src("src/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("uglify", function () {
  return gulp
    .src("src/js/*.js")
    .pipe(uglify())
    .pipe(concat("main.min.js"))
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("minifycss", function () {
  return gulp
    .src("src/css/*.css")
    .pipe(minifycss())
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("watch", function () {
  gulp.watch("src/**/*.js", gulp.series("uglify"));
  gulp.watch("src/**/*.css", gulp.series("minifycss"));
  gulp.watch("src/**/*.html", gulp.series("htmlmin"));
});

gulp.task("default", gulp.series("server", "uglify", "watch"));
