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

requirejs(['jquery', 'less', 'html5', 'bootstrap', 'gcp'], function($){
    $(document).ready(function(){
        require(['ccms/tab']);
        console.log("document has loaded!");
    });
});

define(['app/html-code-prettify'], function(){});