



if(typeof jQuery == "undefined"){
    console.log("jQuery not installed");
} else{
    console.log("jQuery is installed");
}

$(".square").click(function(){

    alert("a square was clicked");

});

$("#greenCircle").hover(function(){


   $("#changeText").html("You changed this text by hovering over the green circle");

});

$("#greenCircle").click(function(){


    alert("Hello, you clicked a green square")
 
 });

 $("#changeParagraphAbove").click(function(){

    $("#secondParagraph").html("This is the new innerHTML text");

 }
 );

 $("#changeThirdParagraph").click(function(){

    $("#thirdParagraph").fadeOut("slow");
    $("#changeThirdParagraph").html("You made the text above fadeout and then dissapear")

 }
 );

 $("#changefourthParagraph").click(function(){

    $("#fourthParagraph").fadeIn("slow");


 }
 );