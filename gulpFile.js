let less = require('gulp-less');
let path = require('path');
let gulp = require('gulp');

gulp.task('less', function () {
    return gulp.src('./less/**/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./styles'));
});