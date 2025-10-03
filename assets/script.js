// Initial array 
const slidesTest = [
	{
		"image":"/assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"/assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"/assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"/assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

//Creating the dots
function dotInsert(){
	//calculating amount of dots needed
	//For each item in slidesTest, add 1 dot
	for(let i = 0; i < slidesTest.length; i++){
		//Create div with the dot class
		//Create the variables
		let divDots = document.createElement("div");
		divDots.classList.add("dot");
		let dotsContainer = document.getElementsByClassName("dots")[0];
		//add a div.dot
		dotsContainer.appendChild(divDots);
	}
}
dotInsert();

// Creating the carousel

let slideIndex = 0;

function carousel (slideIndex){
	//Initial I declaration
	let i;

	//Declare target area for insertion
	let targetArea = document.getElementById("banner");

	// Picture declaration
	// Create the img in HTML with the banner-img class
	let picture = document.createElement("img");
	picture.classList.add("banner-img");
	targetArea.appendChild(picture);
	// Adding the src of the pic
	let targetImg = document.getElementsByClassName("banner-img")[0];
	let carouselPic = slidesTest[slideIndex].image;
	targetImg.setAttribute("src", carouselPic);

	//Text declaration
	//Create the paragraph 
	let text = document.createElement("p");
	text.classList.add("placeholder");
	targetArea.appendChild(text);
	//Adding the content of the text
	let targetText = document.getElementsByClassName("placeholder")[0];
	let carouselText = slidesTest[slideIndex].tagLine;
	targetText.innerHTML = carouselText;

	//Dot declaration
	//Adds the dot_selected class to the dot matching the current pic
	let listeDots = document.querySelectorAll(".dots .dot");
	
	//For Each dot element in listeDots
	listeDots.forEach((dot, i) => {
		//if any element possesses the dot_selected class, remove it
		if (dot.classList.contains('dot_selected')) dot.classList.remove('dot_selected');
		// Add the dot_selected class to the dot correspondant au slideIndex
		if (i === slideIndex) dot.classList.add("dot_selected");
	})
};


// Declaring the carousel

carousel(slideIndex);


//BUTTONS
//Event listeners recommended to avoid mixing HTML and JavaScript (by using 'onclick')

//Left Button
//Note: Targeting an element by class name returns an ARRAY of items, even if there's only 1 element targeted by the class, [0] is needed.
let prevButton = document.getElementsByClassName("arrow_left")[0];
//Function for Previous Slide Button
prevButton.addEventListener("click", function() {
	console.log("Previous");
	//If slider isn't the first pic, decrease Carousel index by 1
	if (slideIndex > 0) {
		carousel(slideIndex -= 1);
	} else {
		carousel(slideIndex = slidesTest.length-1);
	};
	console.log(slideIndex);
});

//Right Button
let nextButton = document.getElementsByClassName("arrow_right")[0];
//Function for next Slide Button
nextButton.addEventListener("click", function() {
	console.log("Next");
	//If slider isn't the last pic, increase Carousel index by 1
	if (slideIndex < slidesTest.length-1) {
		carousel(slideIndex += 1);
	} else {
		//Otherwise, set it back to 0
		carousel(slideIndex = 0);
	};
	console.log(slideIndex);
});



