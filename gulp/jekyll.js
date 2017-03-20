var gulp        = require('gulp');
var cp          = require('child_process');

// Build the Jekyll site
gulp.task('jekyll', function(done) {
    global.browserSync.notify('Compiling Jekyll');

    return cp.spawn('bundle', ['exec', 'jekyll', 'build', '--source=app', '--destination=dist', '--config=_config.yml'], { stdio: 'inherit' })
    .on('close', done);
});
