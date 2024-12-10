let imagem = document.querySelector(".img-logo-copo");

let corFundoImagem = document.querySelector(".circulo");

function trocaImagem(src) {
  console.log(src);
  imagem.src = src;
}

function trocaCorDoCirculo(background) {
  corFundoImagem.style.background = background;
}
