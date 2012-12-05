$(document).ready(function() {
	
$("#saveButton").click(function(){
	var inbox=$("#textCode").val();
	if ($("#checkbox-1").is(':checked')){
    window.localStorage.setItem('value', inbox);
 	window.localStorage.setItem('timestamp', (new Date()).getTime());
 	console.log("Last saved: "+window.localStorage.getItem('value'));
	}
 	eval(inbox);
});
console.log("Last saved: "+window.localStorage.getItem('value'));


});