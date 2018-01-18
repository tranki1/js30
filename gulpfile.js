var gulp = require("gulp"),
  connect = require("gulp-connect");

var outputDir;
outputDir = "PlayingWithCSSVariablesAndJS/";

gulp.task("js", function() {
  gulp
    .src(outputDir + "js/**")
    .pipe(gulp.dest(outputDir + "js"))
    .pipe(connect.reload());
});

gulp.task("html", function() {
  gulp
    .src(outputDir + "*.html")
    .pipe(gulp.dest(outputDir))
    .pipe(connect.reload());
});
gulp.task("css", function() {
  gulp
    .src(outputDir + "css/**")
    .pipe(gulp.dest(outputDir + "css"))
    .pipe(connect.reload());
});

gulp.task("watch", function() {
  gulp.watch(outputDir + "js/**", ["js"]);
  gulp.watch(outputDir + "*.html", ["html"]);
  gulp.watch(outputDir + "css/**", ["css"]);
});

gulp.task("connect", function() {
  connect.server({
    root: outputDir,
    livereload: true
  });
});

gulp.task("default", ["html", "js", "css", "connect", "watch"]);
