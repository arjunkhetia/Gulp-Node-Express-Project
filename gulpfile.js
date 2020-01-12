var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
// A tool to find an open port or domain socket on the machine
var portfinder = require('portfinder');
var port = 3000;
var portSpan = 999;

gulp.task('serve', function() {
  portfinder.getPort({
    port: port,    // minimum port number
    stopPort: port + portSpan // maximum port number
  }, function (err, openPort) {
    if (err) throw err;
    port = openPort;
    console.log('Server will start on port ' + port);
    nodemon({
      script: 'bin/www',
      ext: '',
      env: {
        NODE_ENV: 'dev',
        PORT: port
      },
      ignore: ['./node_modules/**']
    });
  });
});

gulp.task('default', gulp.series('serve'));
