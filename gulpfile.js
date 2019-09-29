var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('serve', function() {
  nodemon({
    script: 'bin/www',
    ext: '',
    env: {
      NODE_ENV: 'dev',
      PORT: 3000
    },
    ignore: ['./node_modules/**']
  });
});

gulp.task('default', gulp.series('serve'));
