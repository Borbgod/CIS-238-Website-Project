/*
	Names: Aaron, Ash, Brian, Gabe, and Makenna
	File Name: script.js
	Date: 4/2/25
*/

//Global variables
var infoDropdown = document.getElementById("our-info-links");
var todoDropdown = document.getElementById("to-do-links");
var planDropdown = document.getElementById("plan-trip-links");

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

function acksub(event) {
      var checkbox = document.getElementById('terms-checkbox');

      if (!checkbox.checked) {
        alert("You must acknowledge the terms and conditions to proceed.");
        event.preventDefault();
      }
}

      function showTerms() {
      alert("Here are the Terms and Conditions:\n1. We are not responsibale for any unreasonable acts.\n2. You must pay on time for your subscription or you will be double charged.\n3. Some of the activites we suggest may be not kid friendly so we are not held responisble for sensorship.\n4. If asked, you may need to show subscription card to get into certian places.\n 5. We are not responsible for any lost subscription cards.");
}
