$(document).ready(function() {

  $.ajax({
    dataType: "json",
    type: 'GET',
    url: "data.json",//+document.getElementById("alias").value,
    crossDomain: true,

    success: function(jsondata) {   
      var response=jsondata;
      var exp=jsondata.experience;
      var expData=[];

      for(var i=0;i<exp.length;i++)
        expData=_.union(expData, [{'exp':exp[i]}]);
                    
      console.log(expData);
      _.templateSettings.variable = "rc";

      var template = _.template(
            $( "script.template" ).html()
      );
        
      var templateData = {
        name : response.name,
        profession: response.profession,
        workplace: response.workplace,
        experience: expData
      };

      $( "#div1" ).after(template(templateData) );
      //console.log(template(templateData));                
    },

    error: function (jqXHR, textStatus, errorThrown) {
      writeText("div1","Something is not right");
      div1.style.color = 'red';
    }
  });
});