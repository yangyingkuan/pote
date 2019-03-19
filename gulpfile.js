var gulp = require('gulp');
//var sass = require('gulp-sass');


//html
gulp.task("copy-html",function () {
    return gulp.src('*.html')
    .pipe(gulp.dest('D:\\pppppp\\phpStudy\\WWW\\potenvshi'));
});


//img
gulp.task('copy-img',function(){
    return gulp.src('img/*.{jpg,png,tmp,gif}')
    .pipe(gulp.dest('D:\\pppppp\\phpStudy\\WWW\\potenvshi\\img'));
});


//scss
//gulp.task('copy-scss', function(){
//  return gulp.src('scss/*.scss')
//  .pipe(sass())
//  .pipe(gulp.dest('D:\\phpStudy\\WWW\\potenvshi\\css'));
//});


//js
gulp.task('copy-js',function(){
    return gulp.src('js/*.js')
    .pipe(gulp.dest('D:\\pppppp\\phpStudy\\WWW\\potenvshi\\js'));
});



//php
gulp.task('copy-php',function(){
    return gulp.src('*.php')
    .pipe(gulp.dest('D:\\pppppp\\phpStudy\\WWW\\potenvshi'));
});



gulp.task("watchall",function(){
    //监视所有文件是否有变化，如果有变化，就执行任务：copy
    gulp.watch("*.html",gulp.series("copy-html"));
    gulp.watch('img/*.{jpg,png,tmp,gif}',gulp.series("copy-img"));
    gulp.watch('js/*.js',gulp.series("copy-js"));
    //gulp.watch('scss/*.scss',gulp.series("copy-scss"));
    gulp.watch('*.php',gulp.series("copy-php"));
});