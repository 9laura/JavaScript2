let senha = document.getElementById("senha");

let minuscula = document.getElementById("minuscula");
let maiuscula = document.getElementById("maiuscula");
let numero = document.getElementById("numero");
let especial = document.getElementById("especial");
let tamanho = document.getElementById("tamanho");
senha.addEventListener("focus", function(){
    document.querySelector(".regras").style.display = "block";
});
senha.addEventListener("keyup", function(){

    let valor = senha.value;

    if(/[a-z]/.test(valor)){
        minuscula.classList.add("valido");
    }else{
        minuscula.classList.remove("valido");
    }

    if(/[A-Z]/.test(valor)){
        maiuscula.classList.add("valido");
    }else{
        maiuscula.classList.remove("valido");
    }

    if(/[0-9]/.test(valor)){
        numero.classList.add("valido");
    }else{
        numero.classList.remove("valido");
    }

    if(/[!@#$%^&*(),.?":{}|<>]/.test(valor)){
        especial.classList.add("valido");
    }else{
        especial.classList.remove("valido");
    }

    if(valor.length >= 12){
        tamanho.classList.add("valido");
    }else{
        tamanho.classList.remove("valido");
    }

});

let form = document.getElementById("formCadastro");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let senhaValor = senha.value;
    let confirmarSenha = document.getElementById("confirmarSenha").value;

    let senhaValida =
    /[a-z]/.test(senhaValor) &&
    /[A-Z]/.test(senhaValor) &&
    /[0-9]/.test(senhaValor) &&
    /[!@#$%^&*(),.?":{}|<>]/.test(senhaValor) &&
    senhaValor.length >= 12;

    if(!senhaValida){
        alert("Senha inválida");
        return;
    }

    if(senhaValor != confirmarSenha){
        alert("As senhas são diferentes");
        return;
    }

    alert("Cadastro realizado");

});