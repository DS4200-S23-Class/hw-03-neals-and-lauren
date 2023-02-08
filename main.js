
let clicks1 = 0;
let clicks2 = 0;
let clicks3 = 0;
let favorite = "";


function buttonClicked1() {
	console.log("button was clicked: you voted for the 2016 Women Voting Map");
	clicks1++;
	mostPopular();
	let newText = "The most popular visualization is: " + favorite;

	// select the element that you want to modify
	let buttonDiv = document.getElementById("button-div");
	buttonDiv.innerHTML = newText;
}

function buttonClicked2() {
	console.log("button was clicked: you voted for The sweet spot");
	clicks2++;
	mostPopular();
	let newText = "The most popular visualization is: " + favorite;

	// select the element that you want to modify
	let buttonDiv = document.getElementById("button-div");
	buttonDiv.innerHTML = newText;
}

function buttonClicked3() {
	console.log("button was clicked: you voted for the Trash in NY Boroughs");
	clicks3++;
	mostPopular();
	let newText = "The most popular visualization is: " + favorite;

	// select the element that you want to modify
	let buttonDiv = document.getElementById("button-div");
	buttonDiv.innerHTML = newText;
}

function mostPopular() {

	if(clicks1>clicks2 && clicks1>clicks3) { 
		favorite = "#1";
	} else if(clicks2>clicks3) {
		favorite = "#2";
	} else favorite = "#3"

	return favorite;
}












