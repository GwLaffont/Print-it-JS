// Initial array causes error message
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];




// Declaring Items

// Nodelist containing all images within #banner
let slidePics = document.querySelectorAll("#banner .banner-img");
// Nodelist containing all '.dot' divs within the '.dots' div
let listeDots = document.querySelectorAll(".dots .dot");
// Placeholder declaration
let slideText = document.querySelectorAll("#banner .text");
//Declaring the Carousel Index
let slideIndex = 1;
//Declaring the Carousel itself: Displays the carousel image that corresponds to the slideIndex
imgSlider(slideIndex);


// Declaring Functions
function imgSlider(slideIndex) {
	//Initial i declaration
	let i;

	// Working on the pics
	for (i = 0; i < slidePics.length; i++){
		// Hides pics that are no longer selected
		slidePics[i].style.display = "none";
	};

	// Working on the dots
	for (i = 0; i < listeDots.length; i++){
		// Removes the dot_selected class in dots that are no longer selected
		listeDots[i].className = listeDots[i].className.replace(" dot_selected", "");
	};

	// Working on the text
	for (i = 0; i < slideText.length; i++){
		// Hides pics that are no longer selected
		slideText[i].style.display = "none";
	};
		
	// Shows the current pic
	slidePics[slideIndex-1].style.display = "block";
	// adds the dot_selected class to the dot matching the current pic
	listeDots[slideIndex-1].className += " dot_selected";
	// Shows the current text
	slideText[slideIndex-1].style.display = "block";
	
};

//BUTTONS
//Event listeners recommended to avoid mixing HTML and JavaScript (by using 'onclick')

//Left Button
//Note: Targeting an element by class name returns an ARRAY of items, even if there's only 1 element targeted by the class, [0] is needed.
let prevButton = document.getElementsByClassName("arrow_left")[0];
//Function for Previous Slide Button
prevButton.addEventListener("click", function() {
	console.log("Previous");
	//If slider isn't the first pic, decrease Carousel index by 1
	if (slideIndex > 1) {
		imgSlider(slideIndex -= 1);
	} else {
		imgSlider(slideIndex = slidePics.length);
	};
	console.log(slideIndex);
});

//Right Button
let nextButton = document.getElementsByClassName("arrow_right")[0];
//Function for next Slide Button
nextButton.addEventListener("click", function() {
	console.log("Next");
	//If slider isn't the last pic, increase Carousel index by 1
	if (slideIndex < slidePics.length) {
		imgSlider(slideIndex += 1);
	} else {
		//Otherwise, set it back to 1
		imgSlider(slideIndex = 1);
	};
	console.log(slideIndex);
});



