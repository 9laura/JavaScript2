//1
function mensagemInicial() {
    console.log("Aprendendo funções com JS")
}
mensagemInicial()

console.log("-------")

//2
function boasVindas () {
    console.log("Desenvolvimento de Sistemas!")
}
boasVindas()
boasVindas()

console.log("-------")


//3
function contador () {
    for (let i = 1; i < 11; i++) {
        console.log(i)
    }
}
contador()

console.log("-------")


//4
function contagemRegressiva () {
    for (let i = 10; i > 0; i--) {
        console.log(i)
    }  
}
contagemRegressiva()

console.log("-------")


//5
function mensagemRepetida () {
    for (let i = 0; i < 5; i++) {
        console.log("Eu gosto de JavaScript")
    }
}
mensagemRepetida()

console.log("-------")


//6
function numerosPares () {
    for (let i = 0; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}
numerosPares()

console.log("-------")


//7
function tabuada () {for (let i = 1; i <= 10; i++) {
        console.log(18 + " x " + i + " = " + (18 * i) )
    }
}
tabuada()

console.log("-------")


//8
function mostrarSoma () {
    let n1 = Number (prompt("Digite o primeiro número") )
    let n2 = Number (prompt("Digite o segundo número") )
    let soma = n1+n2
    console.log(soma)
}
mostrarSoma()

console.log("-------")


//9
function alertaSistema () {
    console.log("Atenção! Verifique as informações.")
}
alertaSistema()
alertaSistema()
alertaSistema()

console.log("-------")


//10
function mensagem1 () {
    console.log("Primeira mensagem")
}
function mensagem2 () {
    console.log("Segunda mensagem")
}
function mensagem3 () {
    console.log("Terceira mensagem")
}
mensagem1()
mensagem2()
mensagem3()

console.log("-------")


//11
function somaDeNumeros () {
    let soma = 0
    for (let i = 0; i < 5; i++) {
        let numero = Number (prompt("Digite um número") )
        soma += numero
    }
    console.log("A soma dos números é: " + soma)
}
somaDeNumeros()

console.log("-------")


//12
function aumento () {
    let salario = Number (prompt("Digite o salário atual") )
        if (salario <= 3500) {
            let novoSalario = salario + 500
            console.log("O novo salário é: " + novoSalario)
        } else {
            console.log("Não terá aumento")
        }
    
}
aumento()

console.log("-------")


//13
function aprovacao () {
    let nota1 = Number (prompt("Digite a nota do aluno") )
    let nota2 = Number (prompt("Digite a nota do aluno") )
    let nota3 = Number (prompt("Digite a nota do aluno") )
    let nota4 = Number (prompt("Digite a nota do aluno") )
    let nota5 = Number (prompt("Digite a nota do aluno") )

    let media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5
    if (media >= 7) {
        console.log("Sua nota é: " + media + " - Aprovado")
    } else if (media >= 5) {
        console.log("Sua nota é: " + media + " - Em recuperação")
    } else {
        console.log("Sua nota é: " + media + " - Reprovado")
    }
}
aprovacao()

console.log("-------")

//14
function classificacao () {
    let nota = Number (prompt("Nos avalie! De uma nota de 0 a 10:") )
    if (nota === 9|| nota === 10) {
        console.log("Excelente")
    } else if (nota === 8) {
        console.log("Ótimo")
    } else if (nota === 7 || nota === 6) {
        console.log("Bom")
    } else if (nota === 5) {
        console.log("Regular")
    } else {
        console.log("Ruim")
    }
}
classificacao()