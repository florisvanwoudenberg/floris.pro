'use strict';

var gulp = require('gulp');
var reload = global.browserSync.reload;
var runSequence = require('run-sequence');

gulp.task('serve', function () {
    runSequence('jekyll', 'css');

    global.browserSync.init({
        server: {
            baseDir: [global.paths.dist]
        }
    });

    gulp.watch([global.paths.html]).on("change", function () {
        runSequence('jekyll', reload);
    });

    gulp.watch([global.paths.js]).on("change", reload);
    gulp.watch([global.paths.scss], ['css'])
});


