// file /js/views/photos.js

define([
       'jquery',
       'underscore',
       'views/generic',
       'text!templates/gallery/photos.html',
], function($, _, GenericView, photosTemplate){

  var photosView = GenericView.extend({
    initialize: function(options) {
      log("initializing photos.js...", INFO);
      var that = this;
      this.options.headerTemplate = "";
   	
    },
    
    setTabs: function() {
    $('#mastersTab a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
})
},
events:
  'show .nav-tabs a': 'navigateTab'

navigateTab: (e) ->
  target = $(e.currentTarget)
  @router.navigate(target.data('url'), trigger: false)

      



    postRender: function() {
   
    }
  });

  return new photosView({'template':photosTemplate});
});




