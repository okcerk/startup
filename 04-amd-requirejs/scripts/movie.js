define(function() {

	var movie=function (){
		this.attributes=[];
    	this.subscribers=[];
    	      this.play=function(){ 
              if (typeof this.attributes !== 'undefined')
                if (typeof this.attributes["name"] !== 'undefined')
                  this.publish("Playing "+this.attributes["name"]);
              };

              this.stop=function(){
              if (typeof this.attributes !== 'undefined')
                if (typeof this.attributes["name"] !== 'undefined')
                  this.publish("Stopped playing "+this.attributes["name"]);
              };

              this.set=function(key, val){
              if (typeof this.attributes !== 'undefined'){
                if (typeof this.attributes[key] == 'undefined') {
                    this.attributes.length++;
                }
            
              }
              else { this.attributes=new Array(); }
              this.attributes[key] = val;
              };

              this.get=function(key){
                return this.attributes[key];
              };

              this.subscribe=function(observer){
              if (typeof this.subscribers == 'undefined') this.subscribers=new Array();
              this.subscribers.push(observer); 
              };

              this.publish=function(data){
              for(var i=0;i<this.subscribers.length;i++){
                this.subscribers[i].fire(data);
              }
              };
	};
  	return movie;
});