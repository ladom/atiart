
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');



gulp.task('styles', function() {
	return gulp.src('style.sass')
	.pipe(
		sass({
			outputStyle: 'expanded'
		})
	)
	.pipe(autoprefixer({
		browsers: ["> 1%"]})
	)
	.pipe(gulp.dest(''))
	
});
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "port: 8080"
        }
    });
});
gulp.task('default', ['styles', 'browser-sync'], function() {
	gulp.watch('style.sass', ['styles']).on('change', reload);
});