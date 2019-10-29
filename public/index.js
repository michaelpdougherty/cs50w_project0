const url = window.location.href
const urlEnd = url.split("/")[3]

let currentPageIndex = 0
if (urlEnd == "about") {
	currentPageIndex = 1
} else if (urlEnd == "portfolio") {
	currentPageIndex = 2	
} else if (urlEnd == "contact") {
	currentPageIndex = 3
}

document.getElementById(`nav-link-${currentPageIndex}`).classList.add('active')

/*
const navbar-nav = document.getElementsByClassName("navbar-nav")[0]

navbar-nav.children[currentPageIndex].classList.add("active")
*/
