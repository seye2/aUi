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
var cache = require('gulp-cache');
var imagemin = require('imagemin');
var path = require('path');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('serve',['styles','scripts','images'], function() {
    browserSync.init(['front-src/html/**/*.html','dev/js/*.js','dev/images/*'],{
        baseDir:'./'
    });

    gulp.watch(['front-src/html/**/*.html'], browserSync.reload);
    gulp.watch(['dev/scss/*.scss'], ['styles']);
    gulp.watch(['dev/js/*.js'], ['scripts']).on('change', browserSync.reload);
    gulp.watch(['dev/images/*'], ['images']).on('change', browserSync.reload);
});

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
        .pipe(gulp.dest('front-src/css'))
        .pipe(browserSync.reload({stream: true}));
});

// Scripts
gulp.task('scripts', function() {
    return gulp.src('dev/js/*.js')
        .pipe(uglify({mangle: false}))//syntax error at angular compress, so add option(mangle:false)
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('front-src/js'));
});

// Images
gulp.task('images', function() {
    return gulp.src('dev/images')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('front-src/images'));
});

// Watch
gulp.task('watch',['serve'], function() {

    // Watch .scss files
    gulp.watch('dev/scss/*.scss', ['styles']);

    // Watch .js files
    gulp.watch('dev/js/*.js', ['scripts']);

    // Watch image files
    gulp.watch('dev/images/*', ['images']);
});

gulp.task('default', ['styles','scripts','server','images','serve'], function() {});

////////////////////////////////////////////////////////////////////////////////
// INSTALL
////////////////////////////////////////////////////////////////////////////////
/*
 gulp.task('install', function() {
 return gulp.src('bower.json')
 .pipe(install());
 });
*/

