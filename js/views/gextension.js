function GV(){}

GV.prototype.sayFoo = function(){
  console.log("foo");
};

GV.prototype.shake = function() {
  console.log("shaking screen");
};

GV.prototype.install = function(extension) {
  console.log("installing...");
  console.log(extension.methods);
  var methods = extension.methods;
  var methodName;
  for (var ext in extension.methods) {
    methodName = methods[ext];
    console.log(methodName);
    this[methodName] = extension[methodName];
  }
};

Extension = function() {
  this.methods = ["hello"];
  this.hello = function(){
    console.log("hello mate");
  };
};


console.log("start");
var gv = new GV();
gv.sayFoo();
gv.shake();
gv.install(new Extension());
gv.hello();
console.log("done");
