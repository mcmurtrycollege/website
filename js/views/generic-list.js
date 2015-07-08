define([
       'jquery',
       'underscore',
       'backbone',
       'views/generic',
], function($, _, Backbone, GenericView){
  var ListGenericView = GenericView.extend({
    _initialize: function() {
      this.set("method", "append");
    },
    renderTemplate: function(templates) {
      var templates = templates ? templates : this.get('templates');
      for (i in templates) {
        if (this.get('method') == "append") {
          this.$el.append(templates[i]);
        } else {
          this.$el.html(templates[i]);
        }
      }
    }
  });

  return ListGenericView;
});
