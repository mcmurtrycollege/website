// file /js/views/home/main.js
// Loads the home page in McMurty. In particular, loads the wordpress
// feed, initializes the carousel and adds the google calendar iframes to
// page.
define([
       'jquery',
       'underscore',
       'views/generic',
       'text!templates/home.html'
], function($, _, GenericView, mainHomeTemplate){

  var mainHomeView = GenericView.extend({
    _initialize: function(options) {
      log("initializing main.js...", INFO);
      var that = this;
      this.options.headerTemplate = "";

      _.bindAll(this, 'scaleCarousel');

      // make sure carousel resizes on window resize
      $(window).resize(function(){
        that.scaleCarousel();
      });
    },

    addCalendar: function() {
        var $cal = $("<div class='span11'><iframe src='https://www.google.com/calendar/embed?showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=12er6c0lb8q11lqjag0ql1drhc%40group.calendar.google.com&amp;color=%235229A3&amp;src=riceprogramcouncil%40gmail.com&amp;color=%2328754E&amp;ctz=America%2FChicago' style=' border-width:0 ' width='100%' height='600' frameborder='0' scrolling='no'></iframe></div>");

         var container = document.getElementById("calendar");
        $cal.appendTo(container);
    },
    
    startCarousel: function(){
      this.scaleCarousel();
      //this.$el.find("#myCarousel").carousel({
      //});
    },

    // carousel width is always the width of the page
    // carousel height is 1/2 of the width
    // TODO: can see this being bad in edge cases with very narrow pages
    scaleCarousel: function() {
      var widthCarousel = $("#myCarousel").width();
      $("#myCarousel img").width($("#myCarousel").width());
      $("#myCarousel img").height(widthCarousel / 2);
    },

    //TODO: hack, not used anymore
    removeHeader: function() {
      $("#container-header").html("");
    },

    postRender: function() {
      this.startCarousel();
      this.addCalendar();

    }
  });

  return new mainHomeView({'template':mainHomeTemplate});
});





