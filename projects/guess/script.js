"use strict"

const cards = document.querySelectorAll("#cards div")
/*
const cardcor = document.querySelector("#cardcor")
*/
var cores = colors.azul
const audios = [
	new Audio("Talitha.ogg"),
	new Audio("Spica.ogg"),
	]
const shadows= [1]
var pontos = 0
var vidas = 3
var cardCerta
var removed = []

function aleat(max) {
	//random from 0 to max
	return Math.floor(Math.random() * max)
}

function sortCor() {
	//limpar rodada anterior e config as opcoes
	for(let i = 0; i < 3; i++) {
		cards[i].classList.remove("certo")
		cards[i].classList.remove("errado")
		
		removed[i] = cores.splice(aleat(cores.length),1)[0]
		cards[i].innerHTML = "<p>"+removed[i]+"</p>"
		//cards[i].style.backgroundColor = removed[i].replace("<wbr/>", "")
	}
	
	cardCerta = aleat(3)
	cardcor.style.backgroundColor = removed[cardCerta].replace("<wbr/>", "")

	for(let i = 0; i < 3; i++) {
		cores.push(removed[i])
	}
	
	loadShadow()
}
function test(n) {
	var err = cards[n].classList.contains("errado")
	if(err) return
	
	if(n == cardCerta) {
		cards[n].classList.add("certo")
		pontos++
		setTimeout(sortCor, 1000)
		document.querySelector("#pontuacao p").innerText = pontos
		audios[0].play()
	}else {
		cards[n].classList.add("errado")
		vidas--
		audios[1].play()
		if(vidas < 0) loose()
	}
}
function loadShadow() {
	var string = ""
	for(var c = pontos; c > 0; c -= 10) {
		console.clear()
		string += "0 0 "
		string += c*3 + "px "
		string += cardcor.style.backgroundColor
		if(c >= 10) string += ", "
			console.log(string)
	}
	cardcor.style.boxShadow = string
}
function loose() {
	vidas = 3
	alert("Fim de jogo.\nPontuacao: "+pontos)
	pontos = 0
	document.querySelector("#pontuacao p").innerText = pontos
	sortCor()
}

function init() {
	var input = document.querySelectorAll("input")
	
	for(var i in input) {
		if(typeof input[i] != "object")
			continue;
		
		input.onclick = function() {
			
		}
	}
	
	audios.forEach(function(v) {
		v.volume = .5
	})
	
	
	sortCor()
}

cards[0].addEventListener("click", function() {test(0)})
cards[1].addEventListener("click", function() {test(1)})
cards[2].addEventListener("click", function() {test(2)})
window.addEventListener("load", init)