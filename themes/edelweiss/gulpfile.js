var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    //copy file
    mix.copy('node_modules/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css', 'resources/assets/css/date-picker.css');
    mix.copy('node_modules/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js', 'resources/assets/js/date-picker.js');
    mix.copy('node_modules/moment/min/moment-with-locales.min.js', 'resources/assets/js/moment.js');
    mix.copy('node_modules/cropperjs/dist/cropper.css', 'resources/assets/css/cropper.css');
    mix.copy('node_modules/cropperjs/dist/cropper.js', 'resources/assets/js/cropper.js');

    //styles
    mix.styles([
        'reset.css',
        'slider.css',
        'vertical-menu.css',
        'bootstrap.css',
        'style.css',
        'newstyle.css',
        'media.css',
        'date-picker.css',
        'cropper.css'
    ]);

    //scripts
    mix.scripts([
        'bootstrap.min.js',
        'slider.js',
        'myjs.js',
        'myscripts.js',
        'moment.js',
        'date-picker.js',
        'cropper.js'
    ]);
});