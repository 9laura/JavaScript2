//DOM
let titulo = document.getElementById("titulo")

function mudar() {
    titulo.innerText = "Mudando o texto"
}

//---------------
let mensagem = document.getElementById("mensagem") //input | .value (so pega o conteudo dentro do input)

function saudacao () {
    let nome = document.getElementById("nome").value
    mensagem.innerText = "Bom dia " + nome
}

//----------------------
let texto = document.getElementById("texto")
function personalizar() {
    texto.style.color = "orange"
    // CSS.Oque vai mudar
    texto.style.backgroundColor = "#2439ae"
    texto.style.fontSize = "50px"
}

//------------------
let texto2 = document.getElementById("texto2")
function troca() {
    if (texto2.style.color == "red") {
        texto2.style.color = "black"
    } else {
        texto2.style.color = "red"
    }
}