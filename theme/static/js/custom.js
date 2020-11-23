var animationXWords = ["control", "connect"]
var animationYWords = ["using", "to"]

document.addEventListener("DOMContentLoaded", () => {
	var usageExamplesElement = document.getElementById("usage-examples");
	var usageExamplesElementHTML = usageExamplesElement.cloneNode(true);
	updateUsageBlock(usageExamplesElement, usageExamplesElementHTML);
	window.addEventListener('resize', ()=> {
		updateUsageBlock(usageExamplesElement, usageExamplesElementHTML);
	});

  });

function clearAnimations(classN) {
	document.getElementsByClassName(classN)[0].classList.add("no-animation");
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}


function changeListPosition(list, itemNumber) {
	if (list.querySelector("p")) {
			list.querySelector("p").style = "color:#d0d2d4;";
			list.style = "-webkit-transition: 1s ease-in-out; -moz-transition: 1s ease-in-out; -o-transition: 1s ease-in-out; transition: 1s ease-in-out;transform: translateY(-" + (list.firstElementChild.offsetHeight/list.firstElementChild.children.length*itemNumber-2*list.firstElementChild.offsetTop) + "px); "
			list.firstElementChild.children[itemNumber].querySelector("p").style = "color:#23cb97;";
			
	}
	
}

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

function updateUsageBlock(usageExamplesElement, usageExamplesElementHTML){
	if (window.screen.width<767) {
		console.log("deleting element");
		document.getElementById("usage-examples").parentNode.removeChild(usageExamplesElement);
	} else {
		if (document.getElementById("usage-examples")==null) {
			insertAfter(usageExamplesElementHTML, document.getElementById("multi-protocol-translation-software"));
		}
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
	}
}

var elems = document.querySelectorAll(".widget.hover");

[].forEach.call(elems, function(el) {
    el.classList.remove("hover");
});