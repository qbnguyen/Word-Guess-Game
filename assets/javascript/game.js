//$....



// create an array of posible answers for the game 
var randomWord=["steak","burgers","fries","hotdog"]

// create something to pick random selection from the array
var randomWord=randomWord[Math.floor(Math.random() * randomWord.length)];


$(document).ready(function(){
    
    $("#click-me").on("click",function( ){
        alert("congrats");
    });
    

});

