const gulp = require('gulp')

const pug = require('gulp-pug')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const htmlmin = require('gulp-htmlmin')

const gulpIf = require('gulp-if')
const uglify = require('gulp-uglify')
const cssnano = require('gulp-cssnano')
const concat = require('gulp-concat')

const imagemin = require('gulp-imagemin')
const cache = require('gulp-cache')

const runSequence = require('run-sequence')
const del = require('del')

const browserSync = require('browser-sync').create()


let config = {
  filePaths: {
    jquery: 'node_modules/jquery/dist/jquery.min.js',
    materializecss: {
      css: 'node_modules/materialize-css/dist/css/materialize.min.css',
      js: 'node_modules/materialize-css/dist/js/materialize.min.js'
    },
    normalizecss: 'node_modules/normalize-css/normalize.css'
  },

  browserOptions: {
    browsers: ['last 2 versions'],
    cascade: false
  }
}


// html, css, js, images
gulp.task('pug', () => {
  gulp.src('src/pug/*.pug')
    .pipe(pug({ pretty: '  ' }))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.reload({ stream: true }))
})

gulp.task('sass', () => {
  gulp.src(['src/sass/imports.sass', config.filePaths.normalizecss, config.filePaths.materializecss.css, 'src/sass/main.sass'])
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer(config.browserOptions))
    .pipe(concat('main.min.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({ stream: true }))
})

gulp.task('scripts', () => {
  gulp.src(['src/js/scripts.js', config.filePaths.jquery, config.filePaths.materializecss.js])
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js'))
})

gulp.task('images', () => {
  gulp.src('src/images/*.+(png|jpg|gif)')
    .pipe(cache(imagemin({ interlaced: true })))
    .pipe(gulp.dest('./images'))
})


// watch, build, default
gulp.task('browserSync', () => {
  browserSync.init({
    server: { baseDir: './' }
  })
})

gulp.task('watch', () => {
  gulp.watch('src/sass/**/*.sass', ['sass'])
  gulp.watch('src/pug/**/*.pug', ['pug'])
  gulp.watch('src/js/**/*.js', ['scripts'])
  gulp.watch('src/images/*.*', ['images'])
  gulp.watch('./*.html', browserSync.reload)
  gulp.watch('./js/*.js', browserSync.reload)
})

gulp.task('clean:dist', () => {
  del.sync(['index.html', 'css', 'js', 'images'])
})

gulp.task('build', () => {
  runSequence(['pug', 'sass', 'scripts', 'images'])
})

gulp.task('default', () => {
  runSequence('clean:dist', ['pug', 'sass', 'scripts', 'images'], 'browserSync', 'watch')
})
