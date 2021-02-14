var animationXWords = ["control", "connect"]
var animationYWords = ["using", "to"]

document.addEventListener("DOMContentLoaded", () => {
	var usageExamplesElement = document.getElementById("usage-examples");
	var usageExamplesElementAnimation = document.getElementsByClassName("animation-container").item(0);
	var usageExamplesElementAnimationHTML = usageExamplesElementAnimation.cloneNode(true);
	updateUsageBlock(usageExamplesElementAnimation, usageExamplesElementAnimationHTML);
	window.addEventListener('resize', ()=> {
		updateUsageBlock(usageExamplesElementAnimation, usageExamplesElementAnimationHTML);
	});

	var moreModulesButton = document.getElementById("more-modules-button");
	var moreModulesInput = document.getElementById("more-modules");
	var modulesContainer = document.getElementById("wide-range-of-supported-protocols");
	moreModulesButton.onclick = function changeContent() {
		if (moreModulesInput.checked) {
			window.scroll({
				top: modulesContainer.offsetTop+window.innerHeight/2,
				behavior: 'smooth'
			});
		} else {
			window.scroll({
				top: window.pageYOffset+150,
				behavior: 'smooth'
			})
		}
	}

  });

function clearAnimations(classN) {
	document.getElementsByClassName(classN)[0].classList.add("no-animation");
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}


function changeListPosition(list, itemNumber) {
	list.style = "-webkit-transition: 2s ease-in-out; -moz-transition: 1s ease-in-out; -o-transition: 1s ease-in-out; transition: 1s ease-in-out;transform: translateY(-" + (list.firstElementChild.offsetHeight/list.firstElementChild.children.length*itemNumber-2*list.firstElementChild.offsetTop) + "px); ";
}

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

function updateUsageBlock(usageExamplesElementAnimation, usageExamplesElementAnimationHTML){
	if (document.getElementById("usage-examples")) {
		if (window.screen.width<767) {
			console.log("deleting animation");
			document.getElementById("usage-examples").removeChild(usageExamplesElementAnimation);
		} else {
			if (document.getElementById("usage-examples")==null) {
				insertAfter(usageExamplesElementAnimationHTML, document.getElementById("multi-protocol-translation-software"));
			}
			var wordX = document.getElementsByClassName("saying").item(0);
			var wordY = document.getElementsByClassName("saying").item(1);
			randomConnectionID = getRandomInt(animationXWords.length);
			wordX.innerHTML = "<p>" + animationXWords[randomConnectionID] + "</p>"
			wordY.innerHTML = "<p>" + animationYWords[randomConnectionID] + "</p>"
	
			clearAnimations("list-from");
			clearAnimations("list-to");
	
			var listX = document.getElementsByClassName("list-from").item(0);
			console.log(listX.firstElementChild.children.length);
			var listY = document.getElementsByClassName("list-to").item(0);
			//shuffleNodes(listX);
			//shuffleNodes(listY);
			window.setInterval(function () {
				changeListPosition(listX, getRandomInt(listX.firstElementChild.children.length))
			}, 2500);
			window.setInterval(function () {
				changeListPosition(listY, getRandomInt(listY.firstElementChild.children.length))
			}, 2500);
		}
	}
	
}

var elems = document.querySelectorAll(".widget.hover");

[].forEach.call(elems, function(el) {
    el.classList.remove("hover");
});



function openNavigation() {
	document.getElementsByClassName("navbar").item(0).style.width = "250px";
	document.getElementsByClassName("getStarted-content").item(0).style.marginLeft = "250px";
  }
  
function closeNavigation() {
document.getElementsByClassName("navbar").item(0).style.width = "0";
document.getElementsByClassName("getStarted-content").item(0).style.marginLeft = "0";
}

