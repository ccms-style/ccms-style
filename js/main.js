/**
 * Created by Administrator on 2014/7/15.
 */
requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        ccms: '../../ccms/js',
        app: '../app',
        gcp: './google-code-prettify/prettify',
        less: 'less-1.7.0.min',
        jquery: 'jquery-1.11.1.min',
        bootstrap: 'bootstrap.min'
    }
});

define(['jquery', 'bootstrap'], function($){
    $(".bs-docs-sidenav").affix({offset:70});
    $('body').scrollspy({target: '.bs-docs-sidebar'});
    require(['less', 'html5', 'app/html-code-prettify']);
});