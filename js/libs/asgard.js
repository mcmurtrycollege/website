(function () {
  // bootstrap
  var root = this;

  // only take jQuery as of now
  var $ = root.jQuery;

  var Asgard = root.Asgard = {};
  Asgard.VERSION = '0.0.1';
  root

  // core
  $.extend(Asgard, {
    urlExists: function(url) {
      var http = new XMLHttpRequest();
      http.open('HEAD', url, false);
      http.send();
      return http.status!=404;
    }
  });
// set window as "this"
}).call(this);

