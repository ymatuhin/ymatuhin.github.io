'use strict';

import gulp from 'gulp';

// todo
add autoprefixer here and imageoptim
generate css form all sass -> as parametr for critical (remove original props from css) -> recursive
gulp shell -> critical all html files (exclude /demo/) -> concat css -> gulp-css-purge -> inline to all html
localStorage font loading

gulp.task('critical', () => {
	gulp.src('_site/**/*.html')
		.pipe()
		.pipe(gulp.dest('./critical'))
	//
    // critical.generate({
    //     inline: true,
    //     base: 'dist/',
    //     src: 'index.html',
	// 	dest: 'styles/styles.min.css',
	//     minify: true,
	//     width: 1300,
	//     height: 900
    // });
});

gulp.task('default', gulp.series('critical'));
