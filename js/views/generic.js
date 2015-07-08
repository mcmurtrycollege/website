// file /js/views/home/main.js
define([
       'jquery',
       'underscore',
       'backbone',
       //'text!templates/header.html'
], function($, _, Backbone){
  /**
   * Gets template from view template or command line
   * To access properties, use this.options.<prop_name>
   */
  var genericView = Backbone.View.extend({

    options : {
      // root of css folder
      "cssRoot" : "assets/css/",
      // selector for header selector
      "elHeader" : "#container-header",
      // append -> append()
      // TODO: consider any other method worth adding
      "method" : "clear",
      // template to display
      "template" : "",
      // title of page. If note set here, can also be set in the html in page
      "title": "",
      // ~~ etc ~~
      "templateHeader" : "",
      // class to be used for making rows
      "rowBaseClass" : "row",
      "analytics": "UA-32460705-1"
    },

    
    // Model
    el: $("#container-content"),

    initialize: function(options) {
      //TODO: depreciate this
      this.options = _.defaults(options || {}, this.options);
      //_.defaults(this.options, this.defaults);

      //var model = Backbone.Model.extend(this.defaults);
      this.model = new Backbone.Model(this.options);
      // initialize model functions TODO: use different initialization method
      this.set = _.bind(this.model.set, this.model);
      this.get = _.bind(this.model.get, this.model),
      this._initialize.apply(this, arguments);
    },

    _initialize: function(){},

    // TODO: depreciate this
    addAnalytics: function(analytics) {
      var account = analytics || this.options.analytics;
      var _gaq = _gaq || [];
      var found = false;

      // check if analytics has already been added to this site
      if (elem.src.indexOf("google-analytics") > 0 ) {
        found = true;
        return false;
      }

      _gaq.push(['_setAccount', account]);
      _gaq.push(['_trackPageview']);
      (function() {
       var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
       ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
       var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
       })();
    },

    // create a row
    //TODO: variable number of columns
    createRow: function(left, right, base) {
      var baseClass = base || this.options['rowBaseClass'];
      var $base = $("<div class='" + baseClass + "'></div>");
      $base.append(left);
      $base.append(right);
      return $base;
    },

    // load css page
    loadCss: function(css) {
      if (!css) { return false; }
      var root = this.get( 'cssRoot' ) || '';
      //TODO: don't hardcode
      $("#dummyStyle")[0].href = root + css + ".css";
      return true;
    },

    renderHeader: function(template) {
      var $elHeader = $(this.options.elHeader);
      var template = template ? template : this.options.templateHeader;
      // TODO: hacky, check if header exists. if so, don't reload it
      if ($elHeader.find("img").length == 0) {
        $elHeader.html("");
        $elHeader.html(template);
      }
    },

    /**
     * Loads css, render template and then reveals
     * hidden elements
     */
    render: function(template) {
      // load css
      var ok = this.loadCss(this.options.css);
      log("load css: " + ok, INFO);
      // clear view
      //this.$el.html("");

      // ######################
      // TODO:HACKS
      
      // scroll to top
      window.scrollTo(0,0);
      // #####################

      this.preRender.apply(this, arguments);
      this.renderHeader();
      // attach template
      var template = template ? template : this.get('template');
      
      // set title
      if (template.search("<title>") >= 0) {
        var start = template.indexOf("<title>");
        var stop = template.indexOf("</title>");
        document.title = template.substring(start + 7, stop - 1);
      } else {
        document.title = this.options.title;
      }

      this.renderTemplate(template);
      
      //enable dropdowns
      $('.dropdown-toggle').dropdown()
      
      $.getJSON( "js/data/emails.json", function( data ) {
                $('.email').each(function (i, obj) {
                  var uname = $(this).attr('id');
                  var hname = data[uname];
                  if (! hname) {
                    hname="rice.edu";
                  }                  
                  var linktext = uname + "@" + hname;
                  $(this).html("<a href='" + "mail" + "to:" + linktext+ "'>" + linktext + "</a>");
                });
            });
      
      sReveal(); //TODO: hack
      this.postRender.apply(this, arguments);
      
      


      log("done rendering", DEBUG);
    },

    /**
      * Default template rendering method
      * Can be overwritten for custom functionality
      */
    renderTemplate: function(template) {
      if (this.get('method') == "append") {
        this.$el.append(template);
      } else {
        this.$el.html(template);
      }
    },
    

    // empty function, define by user
    preRender: function() {},

    // empty function, define by user
    postRender: function() {
    	//this.viewEmails();
    }

  });
  return genericView;
});
