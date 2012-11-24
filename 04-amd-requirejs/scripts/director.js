define(function(){
	var director=function(name){
		this.name=name;
		this.quotes=new Array();
	


		this.setName=function(name){
			this.name=name;

		};
		this.addQuote=function(quote){
			//if (typeof this.quotes == 'undefined') this.quotes=new Array();
			//console.log("added "+quote);

			this.quotes.push(quote);
		};
		this.speak=function(){
			console.log("Quotes from "+this.name+":");
			
			for(var i=0;i<this.quotes.length;i++){
				console.log(this.quotes[i]);
				$('#dialogQuotes').append("<p>"+this.quotes[i]+"</p>") ;
			}
		};
	};
	return director;

});