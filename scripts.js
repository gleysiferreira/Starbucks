let image = document.querySelector(".starbucks")
let circle = document.querySelector(".circle")

function trocaImagem(address) {
  image.src = address
}

function trocaCor(colour) {
  circle.style.background = colour
}