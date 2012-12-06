var source   = $("#entry-template").html();
var template = Handlebars.compile(source);

$(document).ready(function() {
  $.ajax({
    dataType: "json",
    type: 'GET',
    url: "data.json",//+document.getElementById("alias").value,
    crossDomain: true,

    success: function(jsondata) {   
      var response=jsondata;
      var exp=jsondata.experience;
      var expData="";
      for(var i=0;i<exp.length;i++)
        expData+=exp[i]+", ";
        var context = {
          name: response.name, 
          profession: response.profession, 
          workplace: response.workplace, 
          experience:expData
        };
        var html    = template(context);
        $("#div1").html(html);
        //#dialog1.style.color = 'green';
      },

    error: function (jqXHR, textStatus, errorThrown) {
      writeText("div1","Something is not right");
      div1.style.color = 'red';
    }
  });
});