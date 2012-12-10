require.config({
    paths: {
        'jquery': 'libs/jquery/jQuery'
    }
});

require(['jquery'], function() { //starts once movie, director and jquery_mobile were loaded

        window.location="https://foursquare.com/oauth2/authenticate?client_id=42TEDYURRHIIPPEYVLPPWYN3CXWHPCIWHUJSK5YLKS5CUMYG&response_type=token&redirect_uri=http://www.escuadron37.com.ar/FAPI/index2.html";
        
});