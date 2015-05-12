/**
 * Created by Administrator on 2015-05-07.
 */
// Include gulp
var gulp = require('gulp');
var server = require('gulp-express');
var compass = require('gulp-compass');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var livereload = require('gulp-livereload');
var plumber = require('gulp-plumber');
var cache = require('gulp-cache');
var path = require('path');

gulp.task('server', function () {
    // Start the server at the beginning of the task
    server.run(['app.js']);
});

// Styles
gulp.task('styles', function() {
    return gulp.src('dev/scss/*.scss')
        .pipe(compass({
            sass: 'dev/scss',
            css: 'front-src/css',
            image: 'front-src/images'
        }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('front-src/css/'));
});
// Scripts
gulp.task('scripts', function() {
    return gulp.src('/dev/js/**/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('/front-src/js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('/front-src/js'));
});

// Images
gulp.task('images', function() {
    return gulp.src('/front-src/images/*')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('/dev/images'));
});

// Watch
gulp.task('watch', function() {

    // Watch .scss files
    gulp.watch('dev/scss/*.scss', ['compass']);
    /*
     // Watch .js files
     gulp.watch('/dev/js/*.js', ['scripts']);

     // Watch image files
     gulp.watch('/dev/images/*', ['images']);

     // Create LiveReload server
     livereload.listen();

     // Watch any files in dist/, reload on change
     gulp.watch(['/dev/**']).on('change', livereload.changed);
     */

});

gulp.task('default', ['watch','styles','scripts','server'], function() {});

////////////////////////////////////////////////////////////////////////////////
// INSTALL
////////////////////////////////////////////////////////////////////////////////
/*
 gulp.task('install', function() {
 return gulp.src('./bower.json')
 .pipe(install());
 });
*/

