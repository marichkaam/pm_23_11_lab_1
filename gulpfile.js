const { watch, series, src, dest } = require("gulp")

const sass = require("gulp-sass")(require("sass"));
const cssnano = require("gulp-cssnano")
const autoprefixer = require("gulp-autoprefixer")
const imagemin = require("gulp-imagemin")
const concat = require("gulp-concat")
const uglify = require("gulp-uglify")
const rename = require("gulp-rename");
var browserSync = require('browser-sync').create();

function htmlTask(cb) {
	src("app/*.html")
		.pipe(dest("dist"));

	browserSync.reload()
	cb()
}

function sassTask(cb) {
	src("app/sass/*.sass")
		.pipe(concat("style.sass"))
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ["last 2 versions"],
			cascade: false
		}))
		.pipe(cssnano())
		.pipe(rename({ suffix: ".min" }))
		.pipe(dest("dist/css"))

	browserSync.reload()
	cb()
}
function cssTask(cb) {
	src("app/css/*.css")
		// .pipe(concat("style.css"))
		// .pipe(sass())
		.pipe(autoprefixer({
			browsers: ["last 2 versions"],
			cascade: false
		}))
		.pipe(cssnano())
		.pipe(rename({ suffix: ".min" }))
		.pipe(dest("dist/css"))

	browserSync.reload()
	cb()
}

function scriptsTask(cb) {
	src("app/js/*.js")
		.pipe(concat("scripts.js"))
		.pipe(uglify())
		.pipe(rename({ suffix: ".min" }))
		.pipe(dest("dist/js"))

	browserSync.reload()
	cb()
}

function imagesTask(cb) {
	src("app/img/*.+(jpg|jpeg|png|gif|svg)")
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{ removeViewBox: false }],
			interlaced: true
		}))
		.pipe(dest("dist/img"))

	browserSync.reload()
	cb()
}

function openTask(cb) {
	browserSync.init({
		server: {
			baseDir: "dist/"
		}
	});
}


exports.default = series(htmlTask, sassTask, scriptsTask, imagesTask, openTask);

watch("app/*.html", htmlTask)
watch("app/js/*.js", scriptsTask)
watch("app/sass/*.sass", sassTask)
watch("app/css/*.css", cssTask)
watch("app/images/*.+(jpg|jpeg|png|gif)", imagesTask)
