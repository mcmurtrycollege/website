// file js/views/committee.js
define(function(require) {
  var $ = require("jquery"),
    _ = require("underscore"),
    Backbone = require("backbone"),
    GenericView = require("views/generic"),
    alumniT= require("text!templates/mcministry/alumni.html"),
    amenitiesT = require("text!templates/mcministry/amenities.html"),
    associatesT = require("text!templates/mcministry/associates.html"),
    beerBikeT = require("text!templates/mcministry/beer_bike.html"),
    culturalsT = require("text!templates/mcministry/culturals.html"),
    electionsT = require("text!templates/mcministry/elections.html"),
    environmentalT = require("text!templates/mcministry/environmental.html"),
    extSocialsT = require("text!templates/mcministry/external_socials.html"),
    foodT = require("text!templates/mcministry/food.html"),
    imSportsT = require("text!templates/mcministry/sports.html"),
    intSocialsT = require("text!templates/mcministry/internal_socials.html"),
    murtchandiseT = require("text!templates/mcministry/murtchandise.html"),
    philanthropyT = require("text!templates/mcministry/philanthropy.html"),
    seniorT = require("text!templates/mcministry/senior.html"),
    technologyT = require("text!templates/mcministry/technology.html"),
    theatreT = require("text!templates/mcministry/theatre.html"),
    vslT = require("text!templates/mcministry/vsl.html"),
    bootstrap = require("bootstrap");

    committeeTemplate = require("text!templates/mcministry/committees.html")
    
    log("loading committee.js...", DEBUG);

    var committeeView = new GenericView({
      'title': 'Committees',
      'template': committeeTemplate,
    });
    
    committeeView.renderTemplate = function (template) {
        if (this.get('method') == "append") {
          this.$el.append(template);
        } else {
          this.$el.html(template);
        }
        
        //social committees
        var row;
        var rows = ['beerBikeT','culturalsT','extSocialsT', 'intSocialsT', 'seniorT'];
        var i = 0,
          limit = rows.length;
        for (i=0; i<=limit; i+=2) {
          row = this.createRow(eval(rows[i]), eval(rows[i+1]));
          $('#pmCommittees').append(row);
        }
        //facilities committees
        var rows = ['amenitiesT','electionsT','environmentalT', 'foodT', 'murtchandiseT','technologyT','theatreT'];
        var i = 0,
          limit = rows.length;
        for (i=0; i<=limit; i+=2) {
          row = this.createRow(eval(rows[i]), eval(rows[i+1]));
          $('#ivpCommittees').append(row);
        }

        //inter-college committees
        var rows = ['alumniT','associatesT', 'imSportsT','philanthropyT', 'vslT'];
        var i = 0,
          limit = rows.length;
        for (i=0; i<=limit; i+=2) {
          row = this.createRow(eval(rows[i]), eval(rows[i+1]));
          $('#evpCommittees').append(row);
        }
        
    }
    
    return committeeView;

});
