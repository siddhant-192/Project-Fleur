const mix = require('laravel-mix');


mix.js('Resources/js/app.js', 'public/js').postCss('Resources/css/app.css', 'public/css');