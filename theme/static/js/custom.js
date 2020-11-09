var animationXWords = ["control", "connect"]
var animationYWords = ["using", "to"]

document.addEventListener("DOMContentLoaded", () => {
	var wordX = document.getElementsByClassName("saying").item(0);
	var wordY = document.getElementsByClassName("saying").item(1);
	randomConnectionID = getRandomInt(animationXWords.length);
	wordX.innerHTML = animationXWords[randomConnectionID]
	wordY.innerHTML = animationYWords[randomConnectionID]

	clearAnimations("list-from");
	clearAnimations("list-to");

	var listX = document.querySelector(".list-from ul");
	console.log(listX.children.length);
	var listY = document.querySelector(".list-to ul");
	shuffleNodes(listX);
	shuffleNodes(listY);
	window.setInterval(function () {
        //scrollToElement(listX, getRandomInt(listX.children.length))
		//scrollToElement(listY, getRandomInt(listY.children.length))
	}, 3000);
	
  });

function clearAnimations(classN) {
	document.getElementsByClassName(classN)[0].classList.add("no-animation");
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}


function shuffleNodes(list) {
	var nodes = list.children, i = 0;
	nodes = Array.prototype.sort.call(nodes);
	while(i < nodes.length) {
		list.appendChild(nodes[i]);
		++i;
	}
}

function scrollToElement(list, itemNumber) {
    list.children[itemNumber].scrollIntoView();
}