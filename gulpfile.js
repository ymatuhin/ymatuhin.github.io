var gulp = require('gulp');
var logger = require('gulp-logger');
var responsive = require('gulp-responsive');

gulp.task('default', function() {
	return gulp.src('_site/assets/img/**/*.{jpg,png}')
		.pipe(logger({
			// before: 'Starting Gzip...',
			// after: 'Gzipping complete!',
			showChange: true
		}))
		.pipe(responsive({
			'**/*': [
				{
					width: 200,
					rename: { suffix: '-200' }
				}, {
					width: 400,
					rename: { suffix: '-400' }
				}, {
					width: 600,
					rename: { suffix: '-600' }
				}, {
					width: 800,
					rename: { suffix: '-800' }
				}, {
					width: 1000,
					rename: { suffix: '-1000' }
				}, {
					rename: { suffix: '' }
				}
			]
		}, {
			// Global configuration for all images
			quality: 100,
			progressive: true,
			errorOnEnlargement: false,
			skipOnEnlargement: true,
			withMetadata: false,
		}))
		.pipe(gulp.dest('dist'));
});
