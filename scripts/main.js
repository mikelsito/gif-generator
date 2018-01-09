$( document ).ready(function() {
    console.log( "ready!" );

// Declaring Global Variables
//===============================================================
var imageArray = ["laser gun", "space", "planets"];
var userInput;
var buttonValue;

// Defining Functions 
//===============================================================

// Populating Buttons from imageArray
function populateButtons() {
	for (i=0;i<imageArray.length;i++) {
		var button = $("<button class='btn btn-primary mx-2 generate'>");
		$(".buttons").append(button.text(imageArray[i]));
	}
}

// Add Button From User Input On Click
$(".submit").click(function(event){
	event.preventDefault();
	var button = $("<button class='btn btn-primary mx-2 generate'>");
	userInput = $(".user-input").val().trim();
	if (userInput !== "") {
		$(".buttons").append(button.text(userInput));
	}
	$(".user-input").val("");
});

// Generate 10 gifs from giphy API on button click
$("body").on("click", ".generate", function(){
	buttonValue = $(this).text();
	console.log(buttonValue);

	$.ajax({
		url: "https://api.giphy.com/v1/gifs/search?api_key=KHKYV6srBhfvus4FIMTDtp2JUnDhyzbo&q=" + buttonValue + "&limit=10&offset=0&rating=PG&lang=en",
        method: "GET"
      }).done(function(response) { 
      	var results = response.data;
      	for (i=1;i<=10;i++) {
      		var image = $("<img>");
      		image.attr('src', results[i].images.fixed_height.url);
      		$(".images").append(image);
      	}

      });
});

// Calling Functions
//===============================================================
populateButtons();

});