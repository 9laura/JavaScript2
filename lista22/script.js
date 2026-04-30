let ativo1 = document.getElementById("ativo1")
let texto = document.getElementById("texto")
let remover = document.getElementById("remover")
let alternar = document.getElementById("alternar")
let destaque = document.getElementById("destaque")
let grande = document.getElementById("grande")
let escondido = document.getElementById("escondido")
let hover = document.getElementById("hover")
let itens = document.getElementsByClassName("item");

ativo1.addEventListener("click", function() {
texto.classList.add("ativo")
})

remover.addEventListener("click", function() {
texto.classList.remove("ativo")
})

alternar.addEventListener("click", function() {
texto.classList.toggle("ativo")
})

destaque.addEventListener("click", function() {
texto.classList.toggle("destaque")
})

grande.addEventListener("click", function() {
texto.classList.toggle("grande")
})

escondido.addEventListener("click", function() {
texto.classList.toggle("escondido")
})

hover.addEventListener("mouseover", function() {
  hover.classList.add("hover")
});

hover.addEventListener("mouseout", function() {
  hover.classList.remove("hover")
});

botao.addEventListener("click", function() {
  botao.classList.toggle("mudarBotao")
});

for (let i = 0; i < itens.length; i++) {
  itens[i].onclick = function() {
    itens[i].classList.toggle("selecionado")
  };
}

dark.addEventListener("click", function() {
  document.body.classList.toggle("dark")
}
)

menu.addEventListener("click", function() {
  menu.classList.toggle("cores")
})

menu.addEventListener("mouseover", function() {
  menu.classList.add("borda")
})

menu.addEventListener("mouseout", function() {
  menu.classList.remove("borda")
})

red.addEventListener("click", function() {
  caixa.classList.remove("azul", "verde")
  caixa.classList.add("vermelho")
})

blue.addEventListener("click", function() {
  caixa.classList.remove("vermelho", "verde")
  caixa.classList.add("azul")
})

green.addEventListener("click", function() {
  caixa.classList.remove("vermelho", "azul")
  caixa.classList.add("verde")
})