function moverBotao() {
    var botao2 = document.getElementById("botao2");
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);
    botao2.style.left = x + "px";
    botao2.style.top = y + "px";
  }
  