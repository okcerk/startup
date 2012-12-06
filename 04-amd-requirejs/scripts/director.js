define(function(){
	var director=function(name){
		this.name=name;
		this.quotes=this.quotes || [];

		this.setName=function(name){
			this.name=name;
		};

		this.addQuote=function(quote){
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