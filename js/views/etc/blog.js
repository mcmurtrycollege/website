// Blog
define([
       'jquery',
       'underscore',
       'backbone',
       'text!templates/etc/blog.html'
], function($, _, Backbone, blogTemplate) {
  var blogView = Backbone.View.extend({
    el: $("#container-content"),
    render: function() {
      this.$el.html(blogTemplate);
    }
  });
  return new blogView;
});
