$(document).ready(function () {
  $("#btn").click(function (){
    alert("Alert displayed using a external script.");
    
    var options = {};
        options.url = "https://weatherapi-com.p.rapidapi.com/";
        options.type = "GET";
        options.dataType = "json";
        options.success = function (response) {
            alert("Api response: "+ JSON.stringify(response));            
        };
        options.error = function (response) {
            alert("Api error:  "+ JSON.stringify(response));              
        };
        $.ajax(options);
  });
});
