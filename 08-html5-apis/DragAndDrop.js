$(document).ready(function() {

function addEventHandler(obj, evt, handler) {
    if(obj.addEventListener) {
        // W3C method
        obj.addEventListener(evt, handler, false);
    } else if(obj.attachEvent) {
        // IE method.
        obj.attachEvent('on'+evt, handler);
    } else {
        // Old school method.
        obj['on'+evt] = handler;
    }
}

if(window.FileReader) { 
	var drop   = document.getElementById('dropzone');
  addEventHandler(drop, 'drop', function (e) {  
  if (e.preventDefault) { e.preventDefault(); } // stops the browser from redirecting off to the image.

  var dt    = e.dataTransfer;
  var files = dt.files;
  console.log(dt.getData ("Text"));
  for (var i=0; i<files.length; i++) {
    var file = files[i];
    var reader = new FileReader();
    addEventHandler(reader, 'loadend', function(e, file) {
	}.bindToEventHandler(file));
   console.log(file.name);
    reader.readAsDataURL(file);
  }
  return false;
  });
}

Function.prototype.bindToEventHandler = function bindToEventHandler() {
  var handler = this;
  var boundParameters = Array.prototype.slice.call(arguments);
  //create closure
  return function(e) {
      e = e || window.event; // get window.event if e argument missing (in IE)   
      boundParameters.unshift(e);
      handler.apply(this, boundParameters);
  }
};
});