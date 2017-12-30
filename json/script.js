$("button").click(function(){
    $.getJSON("json_data.json",function(obj){
        $.each(obj, function(key,value){
            $("ul").append("<li>"+value.name+"</li>");
        });
    });
});