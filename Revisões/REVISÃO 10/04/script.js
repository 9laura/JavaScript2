let trocar = document.getElementById("trocar") // botao

trocar.addEventListener("click", function() {
    let titulo = document.getElementById("titulo")
    if (titulo == "Outro texto") {
        titulo.innerText = "Titulo do site"
    } else {
    titulo.innerText = "Outro texto"
    }

})
let contador = document.getElementById("contador")
let numero = document.getElementById("numero")
let cliques = 0

contador. addEventListener("click", function() {
cliques++
numero. innerText = cliques
})

let input = document.getElementById("input")
let texto = document.getElementById("texto")

input.addEventListener("input", function(){
    texto.innerText = input.value
    //pode usar o .value a qualquer momento
})


let mudar = document.getElementById("mudar")
mudar.addEventListener("mouseover", function() {
if(mudar. innerText == "Voce achou o texto secreto"){
    mudar.innerText = "texto inicial"
} else {
    mudar.innerText = "Voce achou o texto secreto"
}

})
let imagem = document.getElementById("imagem")
let legenda = document.getElementById("status")

// Ativa quando passa o mouse
imagem.addEventListener("mouseover", function(){
    imagem.src = "cade.png"
    legenda.innerText = "Cadê?"
})

// Ativa quando sai o mouse
imagem.addEventListener("mouseout", function() {
    console.log("achou")
    imagem.src = "achou1.png"
    legenda.innerText = "Achou!"
})

/* Crie um texto que muda a cor de fundo para vermelho e a cor do texto
para amarelo quando passa o mouse, quando o mouse sai, desfaz */

let antes = document.getElementById("antes")
let depois = document.getElementById("depois")

// Ativa quando passa o mouse
imagem.addEventListener("mouseover", function(){
    legenda.innerText = "Muda de cor"
})

// Ativa quando sai o mouse
imagem.addEventListener("mouseout", function() {
    console.log("achou")
    imagem.src = "achou1.png"
    legenda.innerText = "Achou!"
})

let colorido = document.getElementById("colorido")

colorido.addEventListener("mouseover", function() {
    colorido.style.backgroundColor = "red"
    colorido.style.color = "yellow"
})

colorido.addEventListener("mouseout", function() {
    colorido.style.backgroundColor = ""
    colorido.style.color = ""
})

