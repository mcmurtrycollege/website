// file /js/views/home/budget.js

define([
       'jquery',
       'underscore',
       'goog!visualization,1.0',
       'views/generic',
       'text!templates/mcministry/budget.html',
], function($, _, goog, GenericView, budgetTemplate){

  var budgetView = GenericView.extend({
    _initialize: function(options) {
      log("initializing budget.js...", INFO);
      var that = this;
      this.options.headerTemplate = "";


    },

    drawVisualization: function() {
      var fallVisualization;
      var fallData;
      
      fullData = google.visualization.arrayToDataTable([
        ['Item',  'Budget'],
        ['Laundry',	5264],
        ['Damages',	1500],
        ['Initiatives Allocation',	1500],
        ['Town Hall',	900],
        ['Hall Reps',	1000],
        ['Burt\'s Teahouse',	50],
        ['Fall Semester',	17570],
        ['Spring Semester',	17570]

        ]);

      fallData = google.visualization.arrayToDataTable([
          	['Committee',  'Budget'],
          	['Philanthrophy',	630],
			['Alumni',	270],
			['Associates',	375],
			['VSL',	645],
			['Intramural Sports',	520],
			['Fellows',	150],
			['Historian',	30],
			['Elections',	75],
			['Theatre',	1200],
			['Environmental',	150],
			['Murtchandise',	2000],
			['Amenities',	3500],
			['Technology',	150],
			['Food Rep',	0],
			['Internal Socials',	4500],
			['External Socials',	1875],
			['Seniors',	600],
			['Beer Bike',	100],
			['Culturals',	800]
          

            ]);

      // Create and draw the visualization.
      //var container = ;
       var formatter = new google.visualization.NumberFormat(
      {prefix: '', negativeColor: 'red', negativeParens: true});
  formatter.format(fullData, 1);
  formatter.format(fallData, 1);
      fallVisualization = new google.visualization.PieChart(document.getElementById('fallVisualization_div'))
        fallVisualization.draw(fallData, {});
      fullVisualization = new google.visualization.PieChart(document.getElementById('fullVisualization_div'))
        fullVisualization.draw(fullData, {});
    },

    postRender: function() {
      google.load('visualization', '1', {packages: ['corechart'],"callback" : this.drawVisualization});
    }
  });

  return new budgetView({'template':budgetTemplate});
});




