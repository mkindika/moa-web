
'use strict';

// Packages
var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var less = require('gulp-less');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var stripDebug = require('gulp-strip-debug');
var mainBowerFiles = require('main-bower-files');
var flatten = require('gulp-flatten');
var merge2 = require('merge2');
var wait = require('gulp-wait');
var debug = require('gulp-debug');

//All paths
var paths = {
    scripts: ['dev/js/**/*.js'],
    scssWatch: ['dev/css/**/*.scss'],
    scss:['dev/css/style.scss'],
    bower:['bower.json', '.bowerrc']
};

//Compile js
gulp.task('scripts', ['jshint'], function() {
    return gulp.src(paths.scripts)
        .pipe(concat('app.min.js'))
        //.pipe(stripDebug())
        //.pipe(uglify())
        .pipe(gulp.dest('js'));
});

//Compile styles
gulp.task('styles', function() {
    return gulp.src(paths.scss)
        .pipe(wait(100))
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(minifyCss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./css'));
});

//Copy bower js lib
gulp.task('copyBowerJs', function() {
    return gulp.src(mainBowerFiles('**/*.js'))
        .pipe(debug())
        .pipe(uglify({output: {comments: /^!|@preserve|@license|@cc_on/i}}))
        .pipe(concat('lib.min.js'))
        .pipe(gulp.dest('./js'));
});

//Copy bower scss lib
gulp.task('copyBowerCss', function() {
    var bowerScss = gulp.src(mainBowerFiles('**/*.scss'))
                    .pipe(debug())
                    .pipe(sass());
    var bowerLess = gulp.src(mainBowerFiles('**/*.less'))
                    .pipe(debug())
                    .pipe(less());
    var bowerCss = gulp.src(mainBowerFiles('**/*.css'))
                    .pipe(debug());
        
    return merge2(bowerLess, bowerScss, bowerCss)
        .pipe(minifyCss())
        .pipe(concat('lib.min.css'))
        .pipe(gulp.dest('./css'));
});

//Copy bower font files
gulp.task('copyBowerFonts', function () {
    return gulp.src('./bower_components/**/*.{eot,svg,ttf,woff,woff2}')
        .pipe(flatten())
        .pipe(gulp.dest('./fonts'));
});

//Import bower libs
gulp.task('importBowerLibs', ['copyBowerJs', 'copyBowerCss', 'copyBowerFonts'], function() {
    gutil.log(gutil.colors.green('Bower Js & Css files imported'));
});

//Run Jshint
gulp.task('jshint', function() {
    return gulp.src(paths.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

// Run all tasks (run `gulp build` from cli)
gulp.task('build', ['importBowerLibs', 'styles', 'scripts'], function() {
    gutil.log(gutil.colors.yellow('CSS & JS'), gutil.colors.green('Build Completed'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.bower, ['importBowerLibs'])
    gulp.watch(paths.scssWatch, ['styles']);
    gulp.watch(paths.scripts, ['scripts']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'importBowerLibs', 'styles', 'scripts']);