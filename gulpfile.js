var gulp = require('gulp'), 
    sass = require('gulp-sass')(require('sass'));
    cssnano = require('gulp-cssnano'), 
    rename = require('gulp-rename');

    
    gulp.task('sass', function(){ 
        return gulp.src('scss/style.scss') 
            .pipe(sass()) 
            .pipe(gulp.dest('css')) 
    });
    gulp.task('css-min', function() {
        return gulp.src('scss/style.scss') 
            .pipe(sass()) 
            .pipe(cssnano()) 
            .pipe(rename({suffix: '.min'})) 
            .pipe(gulp.dest('build/css'));
    });
    gulp.task('watch', function() {
        gulp.watch('scss/**/*.scss', gulp.parallel('sass'));
    });

    gulp.task('default', gulp.parallel('css-min', 'sass', 'watch'));