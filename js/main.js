requirejs.config({
  paths: {
    
    jquery: "libs/jquery-2.1.1.min",
    underscore: "libs/underscore-min",
    //backbone: "libs/backbone-optamd3-min",
    backbone: "libs/backbone-min",
    bAnalytics: "libs/backbone.analytics",
    text: "libs/require/text",
    templates: "../templates",
    // bootstrap
    bootstrap: "../assets/bootstrap/js/bootstrap.min",
    // plugins from miller medeiros
    async: "libs/plugins/async",
    goog: "libs/plugins/goog",
    propertyParser: "libs/plugins/propertyParser"

  },
  shim: {
      'underscore': {
        deps: [],
        exports: '_'
      },
      'backbone': {
          deps: ['underscore', 'jquery'],
          exports: 'Backbone'
      },
      'bAnalytics': {
        deps: ['backbone'],
        exports: 'bAnalytics'
      },
      'bootstrap' : {
        deps: ['jquery'],
        exports: 'bootstrap'
      }
  },
  waitSeconds:0
});

requirejs(['app'], function(App){
  App.initialize();
});
