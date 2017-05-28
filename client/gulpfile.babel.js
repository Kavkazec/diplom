/* eslint-disable import/no-extraneous-dependencies */
import gulp from 'gulp';
import eslint from 'gulp-eslint';
import mocha from 'gulp-mocha';
import sync from 'gulp-sync';

const gulpsync = sync(gulp);

gulp.task('lint', () => (
  gulp.src([
    'src/**/*.js',
    'src/**/*.jsx',
    'test/**/*.js',
    'test/**/*.jsx',
    'gulpfile.babel.js',
    'webpack.config.js',
    '!node_modules/**']
  )
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
));

gulp.task('test', () => (
  gulp.src(['test/**/*.js'])
    .pipe(mocha())
));

gulp.task('precommit', gulpsync.sync(['lint', 'test']));
