define([
       "jquery",
       "underscore",
       "backbone",
       "router",
       "bAnalytics"
], function($, _, Backbone, Router) {

  var initialize = function() {
    Router.initialize();
  };

  return {
    initialize: initialize
  };
});
