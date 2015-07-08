define([
       'jquery',
       'underscore',
       'backbone',
       'views/generic',
], function($, _, Backbone, GenericView){

  var CompositeGenericView = GenericView.extend({
    _initialize: function() {
      this.options.method = 'append'
    },

    preRender: function() {
      // clear page
      this.$el.html("");
    },

    renderTemplate: function(views) {
      var views = views ? views : this.get('views');
      for (i in views) {
        views[i].set('method', 'append');
        views[i].render()
      }
    }
  });

  return CompositeGenericView;
});
