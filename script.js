$(document).ready(function(){
//Displays time when loading page using moment and formats to desire output
var currentTime = moment().format("dddd, MMMM Do");
var dateOnScreen = $("#currentDay");
dateOnScreen.append(currentTime);



var saveBtn = $(".saveBtn");



saveBtn.on("click",function(){
    
    var textValue = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, textValue);
    //console.log(localStorage.getItem("hour-11"));
    
        var currentKey = time;
        $(this).siblings(".description").text(localStorage.getItem(currentKey));
        // console.log(currentKey);
        // console.log(localStorage.getItem(currentKey));
        
    
    
});

$(document).ready(function(){
    var hour = moment().format("HH");
    var hourId = "hour-"+hour;
    $(".description").each(function(i,element){
        var currentKey = element.parentNode.getAttribute("id");
        $(this).val(localStorage.getItem(currentKey));
        // if(hour === currentKey){

        // }
    });
    
});








});