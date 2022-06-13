"user strict"

var moreLinks = document.querySelectorAll("span.more")
//configuration SPANs that act like 'link',
//but they actually expand the text
for(let i = 0; i < moreLinks.length; i++) {
	let moreLink = moreLinks[i]
	let moreTexts = moreLink.offsetParent.querySelectorAll("p.more")
	let lessLink = moreLink.offsetParent.querySelector(".less")
	
	moreLink.addEventListener("click", function() {
		for(let i = 0; i < moreTexts.length; i++) 
			moreTexts[i].style.display = "block"
		moreLink.style.display = "none"
	})
	lessLink.addEventListener("click", function() {
		for(let i = 0; i < moreTexts.length; i++)
			moreTexts[i].style.display = "none"
		moreLink.style.display = "block"
	})
}


var guess = document.querySelector("div#guess")
var hop = document.querySelector("div#hop")

guess.addEventListener("click", function() {
	window.open("/projects/guess/game.html")
})
hop.addEventListener("click", function() {
	window.open("/projects/hop/hop.html")
})