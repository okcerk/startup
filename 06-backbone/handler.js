$(function() {

    var movieModel= Backbone.Model.extend({
        initialize: function(){
            console.log("movie created");
            this.bind("change:name", function(){ // listens to name changes and executes stuff
            console.log("name changed!");
        });
    },

    defaults:{
        data: [
            {name:"Jurassic Park"},
            {name:"300"},
            {name:"The Dark Knight"},
            {name:"Superbad"},
            {name:"Wedding Crashers"},
            {name:"School of Rock"}
        ]
    },

    addMovie: function(movie){
        var tmp ={} ;
        tmp.name = movie;
        this.get("data").push(tmp);
        console.log("movie added - data size: "+this.get("data").length);
    }
});

    MoviesView = Backbone.View.extend({
        tagName: 'li',
        events: {
            'click #addMovie':  'getMovie',
            'click .deleteMe': 'deleteMovie',
            'click .movieTitle': 'getMovieData',
        },

        initialize: function() {
            this.render();
        },

        render:function(){
            var movies=this.model.get("data");
            for(var i=0;i<movies.length;i++){
                $('#movieList').append('<li><a class="movieTitle" ids="'+i+'">' + movies[i].name + '</a><a class="deleteMe"></a></li>').listview('refresh');
            }
        },

        getMovie: function() {
            var newMovieTitle = $('#newMovieTitle').val();
            this.model.addMovie(newMovieTitle);

            if(newMovieTitle != '') {
                $('#movieList').append('<li><a class="movieTitle">' + newMovieTitle + '</a><a class="deleteMe"></a></li>').listview('refresh');
                $('#newMovieTitle').val('');
            } else {
                alert('No stuff to add');   
            }
        },

        deleteMovie: function(ev){ // ev brings out jquery stuff from which we can get our movie to delete
            console.log($(ev.currentTarget));
            $(ev.currentTarget).parent().remove(); // Cannot use 'this' since here it refers to backbone
            $('#movieList').listview('refresh');
        },

        getMovieData: function(ev){
            var title=$(event.target).text();
            document.getElementById("movieTitle").innerHTML = title;
            $.ajax({
                        dataType: "json",
                        type: 'GET',
                        url: "http://www.imdbapi.com/",
                        data: {t: title},
                        crossDomain: true,
                        success: function(jsondata) {  
                            document.getElementById("movieSynopsis").innerHTML = jsondata.Plot; 
                         },
                        error: function () {
                            console.log("Server error");
                        }
            });
            $.mobile.changePage( '#movieDialog', { transition: "slideup", role: "dialog"} ) ;
        },
    });

    var movieList=new movieModel();
    var view = new MoviesView({el: 'body', model:movieList}); // Must declare it to make it work
});