var gulp			=	require('gulp'),
		watch			=	require('gulp-watch'),
		sass			=	require('gulp-sass'),
		rename		=	require('gulp-rename'),
		autoprfxr	=	require('gulp-autoprefixer'),
		cssmin		=	require('gulp-clean-css'),
		csscomb		=	require('gulp-csscomb'),
		imagemin	=	require('gulp-imagemin'),
		pngquant	=	require('imagemin-pngquant'),
		gcmq			=	require('gulp-group-css-media-queries'),
		gutil			=	require('gulp-util'),
		smartgrid	=	require('smart-grid'),
		bs 				=	require('browser-sync');

var path = {
	src: {
		sass: 	'src/sass/style.sass',
		img: 		'src/img/*.*',
		vendor: {
			smartgrid: 'src/vendor/smart-grid'
		}
	},
	dist: {
		css: 		'dist/css/',
		img: 		'dist/img/'
	}
};

gulp.task('smartgrid', () => {
	smartgrid(path.src.vendor.smartgrid, {
		outputStyle: 'sass',
		columns: 12,
		offset: '30px',
		mobileFirst: false,
		container: {
			maxWidth: '1200px',
			fields: '15px'
		},
		breakPoints: {
			lg: {
				width: '1200px'
			},
			md: {
				width: '991px'
			},
			sm: {
				width: '767px'
			},
			xs: {
				width: '575px'
			},
			xxs: {
				width: '320px'
			}
		}
	});
});

gulp.task('dev', ['all'], () => {
  bs.init({
    server: "./",
    notify: false,
    open: true,
    ui: false
  });

	gulp.watch('src/**/*.+(sass|scss)', ['sass']);
	gulp.watch('dist/js/*.js').on('change', bs.reload);
	gulp.watch('dist/img/*.*').on('change', bs.reload);
	gulp.watch('./**/*.php').on('change', bs.reload);
});

gulp.task('sass', () => {
	gulp.src(path.src.sass)
			.pipe(sass({
				outputStyle: 'expanded'
			})).on('error', sass.logError)
			.pipe(autoprfxr({
				browsers: ['last 2 versions'],
				cascade: false
			}))
			.pipe(gcmq())
			.pipe(csscomb())
			.pipe(gulp.dest(path.dist.css))
			.pipe(bs.stream());
});

gulp.task('img', () => {
	gulp.src(path.src.img)
			.pipe(imagemin({
				progressive: true,
				svgoPlugins: [{removeViewBox: false}],
				use: [pngquant()],
				interlaced: true
			}))
			.pipe(gulp.dest(path.dist.img));
});

gulp.task('all', ['sass', 'img']);

gulp.task('production', ['img'], () => {
	gulp.src(path.src.sass)
			.pipe(sass({
				outputStyle: 'expanded'
			})).on('error', sass.logError)
			.pipe(autoprfxr({
				browsers: ['last 2 versions'],
				cascade: false
			}))
			.pipe(gcmq())
			.pipe(csscomb())
			.pipe(cssmin())
			.pipe(gulp.dest(path.dist.css))
			.pipe(bs.stream());
});
