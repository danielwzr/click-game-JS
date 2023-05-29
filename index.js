var alvo = document.getElementById("alvo");
var pontuacaoElement = document.getElementById("pontuacao");
var pontuacao = 0;
var velocidade = 1000;

function posicaoAleatoria() {
  var left = Math.random() * 300;
  var top = Math.random() * 400;

  alvo.style.left = left + "px";
  alvo.style.top = top + "px";
}

var intervalo = setInterval(posicaoAleatoria, velocidade);


document.addEventListener("click", (event) => {
  if (event.srcElement.id == 'alvo'){
    pontuacao++;
    velocidade = velocidade - 100;
    clearInterval(intervalo)
    intervalo = setInterval(posicaoAleatoria, velocidade);
    pontuacaoElement.innerText = "Pontuação: " + pontuacao;
  }
});
