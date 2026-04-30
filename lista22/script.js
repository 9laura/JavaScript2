let divs = document.querySelectorAll(".caixa")
let mudar = document.getElementById("mudar")

let testes = document.querySelectorAll(".teste")
let adicionar = document.getElementById("adicionar")

let opcoes = document.querySelectorAll(".opcao")

let menus = document.querySelectorAll(".menu")



mudar.addEventListener("click", function(){
    divs.forEach(function(div){
        div.classList.toggle("cor")
    })
})



adicionar.addEventListener("click", function(){
    testes.forEach(function(t){
        t.classList.add("ativo")
    })
})



divs.forEach(function(div){
    div.addEventListener("click", function(){
        console.log("clicou")
        div.classList.toggle("rosa")
        div.classList.toggle("destaque")
    })
})



opcoes.forEach(function(opcao){
    opcao.addEventListener("click", function(){

        opcoes.forEach(function(o){
            o.classList.remove("ativo")
        })

        opcao.classList.add("ativo")

    })
})



menus.forEach(function(menu){
    menu.addEventListener("click", function(){

        menus.forEach(function(m){
            m.classList.remove("ativo")
        })

        menu.classList.add("ativo")

    })
})