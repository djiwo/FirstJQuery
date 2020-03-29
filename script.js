



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


 $("#changefifthParagraph").click(function(){

    if ($("#fifthParagraph").css("display") == "none"){

      $("#fifthParagraph").fadeIn();

    } else{

      $("#fifthParagraph").fadeOut();

    }

    } );

let secondGreenCircleBig = 0;

$("#secondGreenCircle").click(function() {

   if (secondGreenCircleBig == 0){

      $(this).animate({
         width:"400px", 
         height:"400px"
         }, 2000,
         function(){
            
            $(this).css("background-color", "blue");

         });





      secondGreenCircleBig = 1;

   }else {

      $(this).animate({width:"100px", height:"100px"}, 2000,
      function(){
         
         $(this).css("background-color", "green");

      });
      secondGreenCircleBig = 0;
   }
});

var regex = /is/gi;

   var string = "Regex is great! Isn't it?";

   var result = string.match(regex);
   
   alert(result);