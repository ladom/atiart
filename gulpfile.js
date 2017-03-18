
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
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
	.pipe(gulp.dest('style.css'))
	.pipe(browserSync.stream({
		match: '**/*.css'})
	)
});
gulp.task('default', function() {
	gulp.watch('style.sass', ['styles']);
});