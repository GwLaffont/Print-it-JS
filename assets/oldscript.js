// Tests Tests

const testTester = [
	{
		color: "red",
		number: 2
	},
	{
		color: "blue",
		number: 4
	},
	{
		color: "purple",
		number: 3
	},
	{
		color: "orange",
		number: 6
	},
];

console.log(testTester[0]);
console.log(testTester[0].color);

const slider = [
	{
		picture: "assets/images/slideshow/slide1.jpg",
		text: "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		picture: "assets/images/slideshow/slide2.jpg",
		text: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		picture: "assets/images/slideshow/slide3.jpg",
		text: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		picture: "assets/images/slideshow/slide4.png",
		text: "Autocollants <span>avec découpe laser sur mesure</span>",
	},
];

console.log(slider[0].text,slider[0].span);



//function replacer (n) {
	//let nouveau = document.createElement("p");
	//nouveau.textContent = slider[n].text;
	//let ancien = document.getElementsByClassName("placeholder");
	//ancien.replaceWith(nouveau);
	//let text = slider[n].text;
	//ancien.appendChild(text);
//};


// Tests End



// Dots

// Dots (Compteur?)

let listeDots = document.querySelectorAll(".dots .dot");

for (let i = 0; i < listeDots.length; i++) {
	let activeDot = listeDots[0];
	activeDot.classList.add("dot_selected");
	console.log(activeDot);
};



// Function?

// Creating a variable to 'hold' the record of which item is selected.
let slideCounter = 1;
slideShow(slideCounter);

// Function to increase counter in the slideshow (Onclick +1)
function plusSlide (n) {
	slideShow(slideCounter += n);
};

// Function to reduce counter in the slideshow (Onclick -1)
function minusSlide (n) {
	slideShow(slideCounter -= n);
};

//Fuse the 2 above?

function slideShow (n) {
// Variables
	let i;
	//Picture note: Replace the Src?
	let slidePicture = slider[n].picture;
	let slideText = slider[n].text;
	let slideDots = document.querySelectorAll(".dots .dot");
	console.log(slideText, slidePicture);

	//Carousel Dots
	for (i = 0; i < slideDots.length; i++) {
		slideDots[i].className = slideDots[i].className.replace(" dot_selected", "");
	};
}

// Event listeners

//Flèches

let slideArrowLeft = document.getElementById("arrowLeft");
slideArrowLeft.addEventListener("click", () => {
	console.log("arrow LEFT!");
	console.log(slideShow(2));
	
});

let slideArrowRight = document.getElementById("arrowRight");
slideArrowRight.addEventListener("click", () => {
	console.log("arrow RIGHT!");
	console.log(slideShow(3));
	console.log(plusSlide(1));
});