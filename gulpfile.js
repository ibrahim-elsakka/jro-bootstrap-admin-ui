var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch');

var plumberErrorHandler = { errorHandler: notify.onError({

    title: 'Gulp',

    message: 'Error: <%= error.message %>'

})

};


gulp.task('sass', function(){
    return gulp.src('./assets/resources/jro-ui-admin.scss')
        .pipe(plumber(plumberErrorHandler))
        .pipe(sass())
        .pipe(gulp.dest('./assets/css'))
        .pipe(livereload());
});

gulp.task('watch', function(){
    livereload.listen();
    gulp.watch('./assets/resources/components/*.scss', ['sass']);
    gulp.watch('./assets/resources/core/css/*.scss', ['sass']);
    gulp.watch('./assets/resources/plugins/css/*.scss', ['sass']);
    gulp.watch('./assets/resources/*.scss', ['sass']);
});


gulp.task('copy-css-bootstrap', function() {
    gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.css'])
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('copy-css-fontawesome', function() {
    gulp.src(['./node_modules/font-awesome/css/font-awesome.min.css'])
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('copy-css-fontawesome-fonts', function() {
    gulp.src(['./node_modules/font-awesome/fonts/**/*'])
        .pipe(gulp.dest('./assets/fonts/'));
});

gulp.task('copy-css-animate', function() {
    gulp.src(['./node_modules/animate.css/animate.css'])
        .pipe(gulp.dest('./assets/plugins/css/'));
});

gulp.task('copy-css-datepicker', function() {
    gulp.src(['./node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.css'])
        .pipe(gulp.dest('./assets/plugins/css/'));
});




gulp.task('copy-js-bootstrap', function() {
    gulp.src(['./node_modules/bootstrap/dist/js/bootstrap.js'])
        .pipe(gulp.dest('./assets/js/'));
});

gulp.task('copy-js-popper', function() {
    gulp.src(['./node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest('./assets/js/'));
});


gulp.task('copy-js-jquery', function() {
    gulp.src(['./bower_components/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('./assets/js/'));
});

gulp.task('copy-js-moment', function() {
    gulp.src(['./bower_components/moment/min/moment.min.js'])
        .pipe(gulp.dest('./assets/js/'));
});

gulp.task('copy-js-datepicker', function() {
    gulp.src(['./node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js'])
        .pipe(gulp.dest('./assets/plugins/js/'));
});

gulp.task('copy-js-chartjs', function() {
    gulp.src(['./node_modules/chart.js/dist/Chart.bundle.js'])
        .pipe(gulp.dest('./assets/plugins/js/'));
});





gulp.task('default', [
    'sass',
    'watch',
    'copy-css-bootstrap',
    'copy-css-animate',
    'copy-css-datepicker',
    'copy-css-fontawesome',
    'copy-css-fontawesome-fonts',
    'copy-js-bootstrap',
    'copy-js-jquery',
    'copy-js-moment',
    'copy-js-popper',
    'copy-js-datepicker',
    'copy-js-chartjs'
]);