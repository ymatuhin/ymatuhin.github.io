'use strict';

import gulp from 'gulp';
import csso from 'gulp-csso';
import exec from 'gulp-exec';
import concat from 'gulp-concat';
import cssPurge from 'gulp-css-purge';
import purifycss from 'gulp-purifycss';
const  critical = require('critical').stream;

const criticalConfig = {
	base: '_site/',
	dimensions: [{
		width: 1300,
		height: 900
	}, {
		width: 480,
		height: 600
	}, {
		width: 800,
		height: 800
	}],
	css: ['assets/css/main.min.css']
}

// Generate & Inline Critical-path CSS

gulp.task('сss:critical:home:generate', () => {
	return gulp.src('_site/index.html')
		.pipe(critical(criticalConfig))
		.pipe(gulp.dest('.tmp/home'));
});

gulp.task('сss:critical:home', gulp.series('сss:critical:home:generate', () => {
	return gulp.src('.tmp/home/**/*.css')
		.pipe(concat('critical-home.css'))
		.pipe(csso())
		.pipe(gulp.dest('_includes'));
}));

gulp.task('сss:critical:blog:generate', () => {
	return gulp.src('_site/blog/index.html')
		.pipe(critical(criticalConfig))
		.pipe(gulp.dest('.tmp/blog'));
});

gulp.task('сss:critical:blog', gulp.series('сss:critical:blog:generate', () => {
	return gulp.src('.tmp/blog/**/*.css')
		.pipe(concat('critical-blog.css'))
		.pipe(csso())
		.pipe(gulp.dest('_includes'));
}));

gulp.task('сss:critical:post:generate', () => {
	return gulp.src([
		'_site/about/index.html',
		'_site/books/index.html',
		'_site/front-end/logs-in-javascript/index.html',
		'_site/front-end/retina_media_quires/index.html',
		'_site/front-end/problems_of_the_extensions/index.html',
		'_site/blog/how_to_resign_from_the_payler_poloniumarts/index.html',
	], { base: "_site" })
		.pipe(critical(criticalConfig))
		.pipe(gulp.dest('.tmp/post'));
});

gulp.task('сss:critical:post', gulp.series('сss:critical:post:generate', () => {
	return gulp.src('.tmp/post/**/*.css')
		.pipe(concat('critical-post.css'))
		.pipe(cssPurge())
		.pipe(csso())
		.pipe(gulp.dest('_includes'));
}));


gulp.task('css:main', () => {
	return gulp.src('_site/assets/css/main.css')
		.pipe(purifycss([
			'_site/**/*.html',
			'_site/**/*.js'
		]))
		.pipe(concat('main.min.css'))
		.pipe(csso())
		.pipe(gulp.dest('assets/css'));
});

gulp.task('css:critical', gulp.series([
	'сss:critical:home',
	'сss:critical:blog',
	'сss:critical:post'
]));

gulp.task('watch', (cb) => {
	gulp.watch('_site/assets/css/main.css', gulp.parallel('css:main', 'css:critical'));
	cb();
});

// todo
// add autoprefixer here and imageoptim
// generate css form all sass -> as parametr for critical (remove original props from css) -> recursive
// gulp shell -> critical all html files (exclude /demo/) -> concat css -> gulp-css-purge -> inline to all html
// localStorage font loading
gulp.task('default', gulp.series('css:main', 'css:critical'));
