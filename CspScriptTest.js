$(document).ready(function () {
  $("#btn").click(function (){
    alert("Alert displayed using a external script.");
  });
  $("#btnApi").click(function (){
    var options = {};
        options.url = "https://weatherapi-com.p.rapidapi.com/";
        options.type = "GET";
        options.dataType = "json";
        options.success = function (response) {
            alert("Api response: "+ response);            
        };

        options.error = function () {
            alert("Api error: "+ response);              
        };
        $.ajax(options);    
  });
});
