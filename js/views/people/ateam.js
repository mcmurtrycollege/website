// file js/views/ateam.js
define(function(require) {
  var $ = require("jquery"),
    _ = require("underscore"),
    Backbone = require("backbone"),
    GenericView = require("views/generic"),
    mastersT = require("text!templates/people/masters.html"),
    coordinatorT = require("text!templates/people/tabitha.html"),
    hrfT = require("text!templates/people/gibsons.html"),
    ra2T = require("text!templates/people/simonozge.html"),
    ra3T = require("text!templates/people/blunt.html"),
    bootstrap = require("bootstrap");

    ateamTemplate = require("text!templates/people/ateam.html")
    log("loading ateam.js...", DEBUG);

    var ateamView = new GenericView({
      'title': 'Adult Leadership',
      'template': ateamTemplate,
    });
    
    ateamView.renderTemplate = function (template) {
        if (this.get('method') == "append") {
          this.$el.append(template);
        } else {
          this.$el.html(template);
        }
        
        var tabs = ['masters', 'coordinator', 'hrf', 'ra2', 'ra3'];
        for (var i = 0; i<tabs.length; i++){
            $('#'+tabs[i]).html(eval(tabs[i]+'T'));
        }
        $('.contact-info').css("padding-top", "20px");
        $('.contact-info').children('.disabled').css("color","black");
    }
    log("ateam loaded...", DEBUG)
    return ateamView;

});
