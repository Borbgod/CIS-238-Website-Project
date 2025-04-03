/*
	Names: Aaron, Ash, Brian, Gabe, and Makenna
	File Name: script.js
	Date: 4/2/25
*/

//Global variables
var infoDropdown = document.getElementById("our-info");
var todoDropdown = document.getElementById("to-do");
var planDropdown = document.getElementById("plan-trip");

//Hamburger menu Function
function hamburger() {
	var menu = document.getElementById("menu-links");
	if (menu.style.display === "block") {
		menu.style.display = "none";
	} else {
		menu.style.display = "block";
	}
}

function ourinfo() {
	if (infoDropdown.style.display === "block") {
		infoDropdown.style.display = "none";
	} else {
		infoDropdown.style.display = "block";
		todoDropdown.style.display = "none";
		planDropdown.style.display = "none";
	}
}

function todo() {
	if (todoDropdown.style.display === "block") {
		todoDropdown.style.display = "none";
	} else {
		infoDropdown.style.display = "none";
		todoDropdown.style.display = "block";
		planDropdown.style.display = "none";
	}
}

function plantrip() {
	if (planDropdown.style.display === "block") {
		planDropdown.style.display = "none";
	} else {
		infoDropdown.style.display = "none";
		todoDropdown.style.display = "none";
		planDropdown.style.display = "block";
	}
}
