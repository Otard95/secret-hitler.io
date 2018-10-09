const gulp      = require("gulp");
const ts        = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const pugLinter = require('gulp-pug-linter');
const merge     = require('merge-stream');

gulp.task('tsc', () => {

  let tsSrc = tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("dist"));

  let bin = gulp.src(['./src/bin/www'])
    .pipe(gulp.dest('./dist/bin'))

  return merge(tsSrc, bin)

});

gulp.task('lint-pug', () => {

  return gulp.src('./src/**/*.pug')
    .pipe(pugLinter())
    .pipe(pugLinter.reporter())
    .pipe(gulp.dest('./dist'));

});

gulp.task("default", ['tsc', 'lint-pug'], () => {
  gulp.watch(['./src/**/*.ts', './src/bin/www'], ['tsc']);
  gulp.watch('./src/**/*.pug', ['lint-pug']);
});