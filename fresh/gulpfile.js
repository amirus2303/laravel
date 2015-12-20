/*var elixir = require('laravel-elixir');


 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 

elixir(function(mix) {
    mix.sass('app.scss');
});*/


var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');


gulp.task('styles', function() {
  return gulp.src('fresh/resources/assets_dev/css/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('fresh/public/assets_dist/css/'))
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('fresh/public/assets_dist/css/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('fresh/public/assets_dist/css/'))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('fonts', function() {
  return gulp.src('fresh/resources/assets_dev/fonts/*')
    .pipe(gulp.dest('fresh/public/assets_dist/fonts'))
    .pipe(notify({ message: 'Fonts task complete' }));
});


gulp.task('vendor', function() {
  return gulp.src('fresh/resources/assets_dev/vendor/*')
    .pipe(gulp.dest('fresh/public/assets_dist/vendor'))
    .pipe(notify({ message: 'Fonts task complete' }));
});


gulp.task('scripts', function() {
  return gulp.src('fresh/resources/assets_dev/js/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('fresh/public/assets_dist/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('fresh/public/assets_dist/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});


gulp.task('images', function() {
  return gulp.src('fresh/resources/assets_dev/img/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('fresh/public/assets_dist/img'))
    .pipe(notify({ message: 'Images task complete' }));
});


gulp.task('clean', function() {
    return del(['fresh/public/assets_dist/css', 'fresh/public/assets_dist/js', 'fresh/public/assets_dist/img', 'fresh/public/assets_dist/fonts', 'fresh/public/assets_dist/vendor']);
});

gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'images', 'fonts', 'vendor');
});

gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('fresh/resources/assets_dev/css/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('fresh/resources/assets_dev/js/**/*.js', ['scripts']);

  // Watch image files
  gulp.watch('fresh/resources/assets_dev/img/**/*', ['images']);

  // Watch fonts files
  gulp.watch('fresh/resources/assets_dev/fonts/**/*', ['fonts']);

  // Watch fonts files
  gulp.watch('fresh/resources/assets_dev/vendor/**/*', ['vendor']);

  

  // Create LiveReload server
  livereload.listen();

  // Watch any files in dist/, reload on change
  gulp.watch(['fresh/**']).on('change', livereload.changed);

});