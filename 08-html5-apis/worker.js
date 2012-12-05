self.postMessage("Doing stuff");


function stuff(){
    		self.onmessage = function(event) {
  		self.postMessage('Hi '+event.data);
		};
};

//while (true){
setTimeout(stuff(),5000);
//}