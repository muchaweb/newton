var gulp = require('gulp'),
	$ = require('gulp-load-plugins')();

var path = {
	styles : {
		src : './source/sass/**/*.scss',
		dest : './stylesheet/'
	}
}

gulp.task('styles', function () {
	return gulp.src(path.styles.src)
		.pipe($.sass().on('error', $.sass.logError))
		.pipe(gulp.dest(path.styles.dest));
});

gulp.task('watch', function () {
	gulp.watch(path.styles.src , ['styles']);
});

gulp.task('default', ['styles','watch']);
