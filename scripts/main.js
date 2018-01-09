$( document ).ready(function() {
    console.log( "ready!" );

// Declaring Global Variables
//===============================================================
var imageArray = ["bebop", "space", "planets", "aliens"];
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

// Generate 10 still gifs from giphy API on button click
$("body").on("click", ".generate", function(){
	buttonValue = $(this).text();
	console.log(buttonValue);

	$.ajax({
		url: "https://api.giphy.com/v1/gifs/search?api_key=KHKYV6srBhfvus4FIMTDtp2JUnDhyzbo&q=" + buttonValue + "&limit=10&offset=0&&rating=PG&lang=en",
        method: "GET"
      }).done(function(response) { 
      	var results = response.data;
      	for (i=1;i<=10;i++) {
      		var image = $("<img>");
      		image.attr('class', 'gif');
      		image.attr('src', results[i].images.fixed_height_still.url);
      		image.attr('data-still', results[i].images.fixed_height_still.url);
      		image.attr('data-gif', results[i].images.fixed_height.url);
      		$(".images").prepend(image);
      	}

      });
});

// Toggle Between Still And Moving gifs
$("body").on("click", ".gif", function(){
		if ($(this).attr("src") === $(this).attr("data-still")) {
			$(this).attr("src", $(this).attr("data-gif"));
		} else {
			$(this).attr("src", $(this).attr("data-still"));
		}		
	});


// Calling Functions
//===============================================================
populateButtons();

});