let mix = require('laravel-mix');

mix.sass('src/scss/app.scss', 'dist').options({
    processCssUrls: false
})
    .js('src/js/index.js', 'dist');