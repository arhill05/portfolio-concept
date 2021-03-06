var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['browser-sync'], () => {
    gulp.watch('*.html', browserSync.reload)
    gulp.watch('*.css', browserSync.reload)
})