const gulp = require('gulp'),
    watch = require('gulp-watch'),
    cssmin = require('gulp-cssmin'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    autoprefixer = require('autoprefixer'),
    postcssApply = require('postcss-apply'),
    postcssVar = require('postcss-css-variables'),
    postcss = require('gulp-postcss'),
    cssPath = './dev/css',
    jsPath = './dev/js',
    build = './build/',
    css ='tex.css',
    js = 'tex.js',
    processors = [
        autoprefixer({browsers: ['last 2 version']}),
        postcssApply,
        postcssVar
    ];

gulp.task('default', function (cb) {
    var options = {};
    watch(cssPath + '/*.css', options, function (e) {
        // console.log('e:'+JSON.stringify(e));
        console.log(new Date() + ' -- ' + e.history[0].replace(e.base, ''));
        // console.log('\n');
        gulp.src(cssPath + e.history[0].replace(e.base, ''))
        // .pipe(concat(css , {newLine: '\n'}))
        .pipe(postcss(processors))
        .pipe(cssmin())
        .pipe(gulp.dest(build));
    });
});