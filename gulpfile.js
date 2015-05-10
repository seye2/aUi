/**
 * Created by Administrator on 2015-05-07.
 */
// Include gulp
var gulp = require('gulp');
var compass = require('gulp-compass');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');
var plumber = require('gulp-plumber');
var cache = require('gulp-cache');
var path = require('path');

gulp.task('default', ['watch','styles','scripts'], function() {});

//the title and icon that will be used for the Grunt notifications
var notifyInfo = {
    title: 'Gulp',
    icon: path.join(__dirname, 'gulp.png')
};

//error notification settings for plumber
var plumberErrorHandler = { errorHandler: notify.onError({
        title: notifyInfo.title,
        icon: notifyInfo.icon,
        message: "Error: <%= error.message %>"
    })
};

//styles
gulp.task('styles', function() {
    return gulp.src(['./css/scss/**/*.scss'])
        .pipe(plumber(plumberErrorHandler))
        .pipe(compass({
            css: './css',
            sass: './css/scss',
            image: './images'
        }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('./css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('./css'));
});


// Compile Our Sass
/*
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});
*/

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('dist/js/**/*.js')
        .pipe(plumber(plumberErrorHandler))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
});

//watch
gulp.task('watch', function() {
    livereload.listen();

    //watch .scss files
    gulp.watch('./css/scss/**/*.scss', ['styles']);

    //watch .js files
    gulp.watch('dist/js/**/*.js', ['scripts']);


});
////////////////////////////////////////////////////////////////////////////////
// INSTALL
////////////////////////////////////////////////////////////////////////////////

gulp.task('install', function() {
    return gulp.src('./bower.json')
        .pipe(install());
});

