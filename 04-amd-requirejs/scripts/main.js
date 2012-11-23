require(['movie','director'], function(movie,director) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".




             var movie1=new movie();
     var director1= new director("george");


    director1.addQuote("I do not like puppies.");
    director1.addQuote("Remember remember the fifth of November");
   movie1.set("name","Jurassic Park");
   console.log(movie1.get("name"));
   director1.speak();

});