var animationXWords = ["control", "connect"]
var animationYWords = ["using", "to"]

document.addEventListener("DOMContentLoaded", () => {
	var wordX = document.getElementsByClassName("saying").item(0);
	var wordY = document.getElementsByClassName("saying").item(1);
	randomConnectionID = getRandomInt(animationXWords.length);
	wordX.innerHTML = "<p>" + animationXWords[randomConnectionID] + "</p>"
	wordY.innerHTML = "<p>" + animationYWords[randomConnectionID] + "</p>"

	clearAnimations("list-from");
	clearAnimations("list-to");

	var listX = document.querySelector(".list-from");
	console.log(listX.children.length);
	var listY = document.querySelector(".list-to");
	//shuffleNodes(listX);
	//shuffleNodes(listY);
	window.setInterval(function () {
		changeListPosition(listX, getRandomInt(listX.firstElementChild.children.length))
	}, 2000);
	window.setInterval(function () {
		changeListPosition(listY, getRandomInt(listY.firstElementChild.children.length))
	}, 2000);
	
  });

function clearAnimations(classN) {
	document.getElementsByClassName(classN)[0].classList.add("no-animation");
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}


function changeListPosition(list, itemNumber) {
	list.querySelector("p").style = "color:#d0d2d4;";
	list.style = "-webkit-transition: 1s ease-in-out; -moz-transition: 1s ease-in-out; -o-transition: 1s ease-in-out; transition: 1s ease-in-out;transform: translateY(-" + (list.firstElementChild.offsetHeight/list.firstElementChild.children.length*itemNumber-2*list.firstElementChild.offsetTop) + "px); "
	list.firstElementChild.children[itemNumber].querySelector("p").style = "color:#23cb97;";
	
}