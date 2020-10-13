const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');

//SASSをコンパイル
gulp.task('sass', () => {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'));
});

//CSSを圧縮
gulp.task('minify-css', () => {
    return gulp.src('./src/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dist/css'));
});

//画像を圧縮
gulp.task('imagemin', function(){
    gulp.src('src/images/*')
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 5
        }))
        .pipe(gulp.dest('dist/images'))
});

//./src/scssでscssを書く->./src/sccにコンパイルしたcssが吐き出される。->distに圧縮したcssをさらに吐き出しこのファイルをhtmlで読みこむ。
gulp.task('watch', function(){
    gulp.watch('./src/scss/*.scss', gulp.task('sass'));
    gulp.watch('./src/scss/**/*.scss', gulp.task('sass'));
    gulp.watch('./src/scss/**/**/*.scss', gulp.task('sass'));
    gulp.watch('./src/css/*.css', gulp.task('minify-css'));
});