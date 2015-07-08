// file js/views/minutes.js
define(["jquery","underscore","backbone","views/generic","text!templates/mcministry/minutes.html","bootstrap"], function($,_,Backbone,GenericView,minutesTemplate,bootstrap) {



    log("loading minutes.js...", DEBUG);
    var minutesView = new GenericView({
      'title': 'Town Hall Minutes',
      'template': minutesTemplate
    });
    
    minutesView.postRender = function() {
      var dates2014 = ['2014-01-14','2014-01-28','2014-02-11'];
      for (var i = dates2014.length - 1; i >= 0; i--) {
        $('#2014tbody').append('<tr><td><span class="glyphicon glyphicon-file"></span> <a href="assets/docs/mcministry/minutes/2014/'+dates2014[i]+'.pdf">'+prettyDate(dates2014[i])+'</a></td></tr>');
          
      }
      
      var dates2013 = ['2013-01-08', '2013-01-22', '2013-03-19', '2013-04-02', '2013-04-16', '2013-08-27', '2013-09-10', '2013-09-24', '2013-10-22', '2013-11-05', '2013-11-19', '2013-12-03'];
      for (var i = dates2013.length - 1; i >= 0; i--) {
        $('#2013tbody').append('<tr><td><span class="glyphicon glyphicon-file"></span> <a href="assets/docs/mcministry/minutes/2013/'+dates2013[i]+'.pdf">'+prettyDate(dates2013[i])+'</a></td></tr>');
          
      }
      
      
      var dates2012 = ['2012-01-10', '2012-01-24', '2012-01-31', '2012-02-07', '2012-03-06', '2012-03-20', '2012-04-02', '2012-04-17', '2012-08-21', '2012-09-04', '2012-09-18', '2012-10-02', '2012-10-23', '2012-11-20'];
      for (var i = dates2012.length - 1; i >= 0; i--) {
        $('#2012tbody').append('<tr><td><span class="glyphicon glyphicon-file"></span> <a href="assets/docs/mcministry/minutes/2012/'+dates2012[i]+'.pdf">'+prettyDate(dates2012[i])+'</a></td></tr>');
          
      }
      
      
      var dates2011 = ['2011-03-22', '2011-03-29', '2011-04-05', '2011-04-12', '2011-04-19', '2011-08-23', '2011-08-30', '2011-09-06', '2011-09-13', '2011-09-20', '2011-09-27', '2011-10-04', '2011-10-18', '2011-10-25', '2011-11-01', '2011-11-08', '2011-11-15', '2011-11-29'];
      for (var i = dates2011.length - 1; i >= 0; i--) {
        $('#2011tbody').append('<tr><td><span class="glyphicon glyphicon-file"></span> <a href="assets/docs/mcministry/minutes/2011/'+dates2011[i]+'.pdf">'+prettyDate(dates2011[i])+'</a></td></tr>');
          
      }
      
      
    }
    return minutesView;
});


function prettyDate (dateString) {
  var monthNames = [ "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December" ];
  
  var d = new Date(dateString);
  var datestr = monthNames[d.getUTCMonth()]+' '+d.getUTCDate()+', '+d.getUTCFullYear();
  return datestr;
  
}
