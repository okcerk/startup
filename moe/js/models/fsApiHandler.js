define( ['backbone','jquery'], function(Backbone) {  
   return Backbone.Model.extend({
        initialize: function(){

        },
        getCheckIns: function(){
            var vars = [], hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('#') + 1).split('&');
            for(var i = 0; i < hashes.length; i++){
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }

            access_token=vars["access_token"];
            console.log("access_token: "+access_token);

            $.ajax({
                dataType: "json",
                type: 'GET',
                url: "https://api.foursquare.com/v2/users/self/checkins?oauth_token="+access_token,
                crossDomain: true,

                success: function(jsondata) {   
                    var checkins= jsondata.response.checkins.items;
                            for(var i=0; i<checkins.length; i++){
            var location = checkins[i].venue.location;
            var lat = location.lat;
            var lng = location.lng;
            console.log("Check in "+i+": "+"Lat= "+lat+" - Long= "+lng);
        }
                    return jsondata.response.checkins.items;
                    
                },

                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("Server error");
                }
            });
        }
	});
});