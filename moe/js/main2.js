require.config({
    paths: {
        'jquery': 'libs/jquery/jQuery',
        'backbone': 'libs/backbone/backbone',
        'undescore':'libs/underscore/underscore',
        'fsApiHandler':'models/fsApiHandler'
    },

	shim : {
		'backbone' :{
		deps:['jquery','underscore'],
		exports: 'Backbone'
		}
	}
});

require(['fsApiHandler'], function(fsApiHandler) {
 
        var fsApi=new fsApiHandler();
        var checkins=fsApi.getCheckIns();
        for(var i=0; i<checkins.length; i++){
            var location = checkins[i].venue.location;
            var lat = location.lat;
            var lng = location.lng;
            console.log("Check in "+i+": "+"Lat= "+lat+" - Long= "+lng);
        }

});