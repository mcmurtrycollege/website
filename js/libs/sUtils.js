/*
 * Plumbing functions
 */

/**
 * JS Assertion
 */
function AssertionException(msg) {
  this.msg = msg;
}
AssertionException.prototype.toString = function() {
  return 'AssertionException: ' + this.msg;
}
function assert(expression, msg) {
  if (!expression) {
    throw new AssertionException(msg);
  }
}

/**
 * Platform independent log
 */
var DEBUG = 0,
  INFO = 1,
  ERROR = 2,
  BOND = 3;

function log(msg, lvl) {
  var prefix = "";

  if (lvl == DEBUG) {
    prefix = "[debug]:";
  } else if (lvl == INFO) {
    prefix = "[info]:";
  } else if (lvl == ERROR) {
    prefix = "[error]:";
  } else if (lvl == BOND){
    prefix = "[BOND!]:";
  }
  //TODO: make this host specific
  console.log(prefix + " " + msg);
}

/* == Other == */
var sReveal = function() {
  $(".sHidden").css("visibility", "visible");
};

var sPlaceholder = function(width, height) {
  var img = "<img class='img-fluid' src='http://placehold.it/" +
  width + "x" + height + "' alt='placeholder'>";
  return img;
};

log("loaded sUtils", DEBUG);
