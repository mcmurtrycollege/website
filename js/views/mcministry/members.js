// file js/views/members.js
define(["jquery","underscore","backbone","views/generic","text!templates/mcministry/members.html","bootstrap"], function($,_,Backbone,GenericView,membersTemplate,bootstrap) {



    log("loading members.js...", DEBUG);
    var membersView = new GenericView({
      'title': 'Members',
      'template': membersTemplate,
      events: {
        'click .nav > li > a': 'testFunction'
      }
    });
    
    
        
   membersView.renderTemplate = function(template) {
     //log(this.section)
      
      if (this.get('method') == "append") {
        this.$el.append(template);
      } else {
        this.$el.html(template);
      }
      
      
      if (this.section) {
        $(document).scrollTop($('#'+this.section).offset().top - 50 ); 
      }
    };
    
    membersView.postRender = function() {
        //log(this.$el.html());
        //this.$el.css("margin-left", 0);
        //this.$el.css("margin-right", 0);
        //$('#memberTables').css('position','relative');
        //$('#memberTables').css('overflow','auto');
       
        //$('#memberTables').scrollspy({ target: '#sidenav', offset: 80 });
        //$('#memberTables').height($( window ).height() - $('#memberTables').position().top - $('footer').height() - $('#container-footer').height() - 25);
    }
    return membersView;
});
