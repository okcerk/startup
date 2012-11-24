require.config({
    paths: {
        'jquery': 'jquery-1.8.2.min',
        'jquerymobile': 'jquery.mobile-1.2.0.min'
    },

    shim: { 

        'jquerymobile' : { 
            deps: ['jquery'],
            exports: 'jQuerymobile'
        }
    }
});

require(['movie','director','jquerymobile'], function(movie,director) { //starts once movie, director and jquery_mobile were loaded
     var movie1=new movie();
     var director1= new director("george");

    director1.addQuote("I do not like puppies.");
    director1.addQuote("Remember remember the fifth of November");
   movie1.set("name","Jurassic Park");
   console.log(movie1.get("name"));


       $("#quotesButton").bind(  'click', function() {
        document.getElementById("dialogQuotes").innerHTML = ""
        var stuff=director1.speak() ;

        
       $.mobile.changePage( '#dialog1', { transition: "slideup", role: "dialog"} ) ;
     });

});