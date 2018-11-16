/**
 * Require the files needed to run mix.
 * @package mix Requires Laravel Mix. Kind of necessary, really.
 * @package tailwindcss Calls in TailwindCSS' core config files.
 * @package purgeCss Calls in the Laravel Mix specific config of PurgeCss.
 * Used to strip out any unnecessary classes.
 */
let mix = require('laravel-mix');
let purgeCss = require('laravel-mix-purgecss');

/**
 * Configure our compilation tasks
 * @param string The location of your source file.
 * @param string The location of where you want your output file to end up.
 */
mix.sass('assets/styles/app.scss', 'css/app.css')
   .options({
     postCss: [
       require('postcss-sorting')({
         'properties-order': 'alphabetical'
       })
     ],
     processCssUrls: false
   });
mix.js('assets/scripts/app.js', 'js/app.js');
mix.version();
// mix.browserSync({
//   proxy: 'http://your.local.url',
//   files: [
//     '**/*.html',
//     '**/*.php',
//     '**/*.svg',
//     '**/*.jpg',
//     '**/*.png',
//     '**/*.jpeg',
//     '**/*.webp',
//     'assets/**/*.scss',
//     'assets/**/*.js'
//   ],
//   // tunnel: ""
// });

/**
 * Set the public path to / as we aren't in a Laravel project
 * with a public folder.
 */
mix.setPublicPath('/');

/**
 * When we run production, we want to also run PurgeCSS so that
 * we can reduce the overall weight of the CSS file.
 */
if (mix.inProduction()) {
  mix.purgeCss({
      enabled: true,
      globs: [
          path.join(__dirname, 'layouts/*.html'),
          path.join(__dirname, 'templates/*.html'),
          path.join(__dirname, 'templates/**/*.html'),
          path.join(__dirname, 'partials/*.html'),
          path.join(__dirname, 'partials/**/*.html'),
          path.join(__dirname, 'js/**.js'),
          path.join(__dirname, 'img/**.svg'),
      ],
      extensions: ['html', 'js', 'php', 'vue', 'svg'],
  })
};
