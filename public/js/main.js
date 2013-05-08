require.config({

    baseUrl : '/js',
    
    paths: {
        'jquery': 'lib/jquery',
        'underscore': 'lib/underscore',
        'backbone': 'lib/backbone',
        'text' : 'lib/text',
        'bootstrap' : 'lib/bootstrap'
    },

    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore' : {
            exports : '_'
        },
        'bootstrap': {
            deps: ['jquery']
        }
    }

});




require(["backbone", "views/AppView"], function(Backbone, AppView) {


// console.log(arguments)

    new AppView();
});