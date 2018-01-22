const gulp      = require("gulp");
const ts        = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const pugLinter = require('gulp-pug-linter');
const merge     = require('merge-stream');
const nodemon   = require('gulp-nodemon');

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

gulp.task('serve', () => {

  nodemon({
    script: './dist/bin/www',
    ext: 'js',
    ignore: [
      './src/',
      './.git/',
      './node_modues/',
      './LICENSE',
      './package*.json',
      './README.md',
      './*.pdf',
      './.gitignore'
    ],
    env: { 'NODE_ENV': 'development' }
  });

});

gulp.task("default", ['tsc', 'lint-pug', 'serve'], () => {
  gulp.watch(['./src/**/*.ts', './src/bin/www'], ['tsc']);
  gulp.watch('./src/**/*.pug', ['lint-pug']);
});