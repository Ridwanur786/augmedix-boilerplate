const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();



function compileCss(){
//path of the scss file
    return gulp.src('./src/scss/**/*.scss')
    //pass that file  through sass compiler
    .pipe(sass())

//destination path for compiled css
    .pipe(gulp.dest('./src/css'))
//strem changes to all browser
    .pipe(browserSync.stream());
}
//watch function for chaning things in our files 
function watch(){
    browserSync.init({
        server:{
           baseDir:'./'
        }
    });
   gulp.watch('./src/scss/**/*.scss', compileCss);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.compileCss = compileCss;
exports.watch=watch;