var gulp = require("gulp"),
  gutil = require("gulp-util"),
  connect = require("gulp-connect");
watch = require("gulp-watch");

var jsSources, outputDir;
outputDir = "clock/";

jsSources = ["*.js"];

gulp.task("js", function() {
  gulp
    .src(outputDir + "js/*.js")
    .pipe(gulp.dest(outputDir + "js"))
    .pipe(connect.reload());
});

gulp.task("watch", function() {
  gulp.watch(outputDir + "js/*.js", ["js"]);
  gulp.watch(outputDir + "*.html", ["html"]);
  gulp.watch(outputDir + "css/*.css", ["css"]);
});

gulp.task("connect", function() {
  connect.server({
    root: outputDir,
    livereload: true
  });
});

gulp.task("html", function() {
  gulp
    .src(outputDir + "*.html")
    .pipe(gulp.dest(outputDir))
    .pipe(connect.reload());
});
gulp.task("css", function() {
  gulp
    .src(outputDir + "css/*.css")
    .pipe(gulp.dest(outputDir + "css"))
    .pipe(connect.reload());
});

gulp.task("default", ["html", "js", "css", "connect", "watch"]);
