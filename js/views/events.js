// file /js/views/home/events.js

define([
       'jquery',
       'underscore',
       'views/generic',
       'text!templates/events/events.html',
], function($, _,  GenericView, eventsTemplate){

  var eventsView = GenericView.extend({
    _initialize: function(options) {
      log("initializing events.js...", INFO);
      var that = this;
      this.options.headerTemplate = "";

      _.bindAll(this, 'loadRiceEvents');


    },

    addRPCCalendar: function() {
        var $cal = $("<div class='span11'><iframe src='https://www.google.com/calendar/embed?title=RPC%20Campus%20Programming&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=riceprogramcouncil%40gmail.com&amp;color=%23125A12&amp;src=rice.edu_90aprbs5m5el9odenh43sff5hc%40group.calendar.google.com&amp;color=%23B1440E&amp;ctz=America%2FChicago' frameborder='0' scrolling='no' width='100%' height='600'></iframe></div>");
        var container = document.getElementById("rpcCal");
        $cal.appendTo(container);
    },

    addCulturalsCalendar: function() {
        var $cal = $("<div class='span11'><iframe src='https://www.google.com/calendar/embed?showTitle=0&amp;height=800&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=mcculturals%40gmail.com&amp;color=%232952A3&amp;ctz=America%2FChicago' style=' border-width:0 ' width='100%' height='800' frameborder='0' scrolling='no'></iframe></div>");
        var container = document.getElementById("culturals");
        $cal.appendTo(container);
    },



    loadRiceEvents: function() {
      var feed = new google.feeds.Feed("http://services.rice.edu/events/dailyevents.cfm?days=4&eventtypeid=120,143,108,15,22,102,12");
      //17,112
      feed.setNumEntries(10);
      feed.load(function(result) {
        if (!result.error) {
          var container = document.getElementById("riceEventsList");
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
            var entryDiv = $('<div>');
            //  .attr('class', 'entry');
            var titleDiv = $('<ul>')
              .attr('class', 'title')
              .html('<li><a href='+entry.link+ '>' + entry.title + '<a></li>');
           // $('<span>')
           //   .attr('class', 'date')
           //   .appendTo(titleDiv);
            titleDiv.appendTo(entryDiv);
           // $('<div>')
            //  .attr('class', 'content')
              //.html(entry.content)
             // .appendTo(entryDiv);
            entryDiv.appendTo(container);
            //$('<hr />').appendTo(container);
          }
        }
      });
    },

    postRender: function() {
      this.loadRiceEvents();
      this.addCulturalsCalendar();
      this.addRPCCalendar();

    }
  });

  return new eventsView({'template':eventsTemplate});
});





