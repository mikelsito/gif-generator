$( document ).ready(function() {
    console.log( "ready!" );

// Declaring Global Variables
//===============================================================
var imageArray = ["laser gun", "space", "planets"];
var userInput;


// Defining Functions 
//===============================================================

// Populating Buttons from imageArray
function populateButtons() {
	for (i=0;i<imageArray.length;i++) {
		var button = $("<button class='btn btn-primary mx-2'>");
		$(".buttons").append(button.text(imageArray[i]));
	}
}

// Add Button From User Input On Click
$(".submit").click(function(event){
	event.preventDefault();
	var button = $("<button class='btn btn-primary mx-2'>");
	userInput = $(".user-input").val().trim();
	$(".buttons").append(button.text(userInput));
	$(".user-input").val("");
});

// Generate 10 gifs from giphy API on button click


// Calling Functions
//===============================================================
populateButtons();

});