define(function(require) {
  var $ = require("jquery"),
    _ = require("underscore"),
    Backbone = require("backbone"),
    GenericView = require("views/generic"),
    roomReservationT = require("text!templates/resources/room_reservation.html"),
    techInfoT=require("text!templates/resources/tech_info.html"),
    taxT=require("text!templates/resources/tax.html"),
    itHelpT=require("text!templates/resources/it_help.html"),
    serveryT=require("text!templates/resources/servery.html"),
    computerT=require("text!templates/resources/computer.html"),
    shuttleT=require("text!templates/resources/bus.html"),
    laundryT=require("text!templates/resources/laundry.html");

    var resourceView = GenericView.extend({
        preRender: function() {
          this.$el.html("");
          this.$el.css("padding-left", "15px");
          this.$el.css("padding-right", "15px");
          this.$el.append("<div class='row'><div class='col-md-12'><h1>Resources:</h1></div></div>");
        },
        renderTemplate: function(template) {
            var row;
            var rows = ['roomReservationT','techInfoT','taxT','itHelpT','serveryT','shuttleT','laundryT','computerT'];
            var i = 0,
              limit = rows.length;
            for (i=0; i<=limit; i+=2) {
              row = this.createRow(eval(rows[i]), eval(rows[i+1]));
              this.$el.append(row);
            }
        }
    });
    return new resourceView({'title':'Resources', 'template':''});
});
