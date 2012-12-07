$(document).ready(function() {
	
	$("#sendToWS").click(function(){
		var socket = new WebSocket('ws://html5rocks.websocket.org/echo');
		socket.onopen = function(event) {
			console.log("Socket opened!");
	 		socket.send($("#WSInput").val());
		};

		socket.onmessage = function(msg){
			$("#webSocketData").html("Data received: "+msg.data);
		}
		socket.onclose = function(event) { console.log(' Socket closed'); }
	});
});