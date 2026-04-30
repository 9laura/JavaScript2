// 1 - Comparando Dois Números

let n1 = Number(prompt("Informe um número"))
let n2 = Number(prompt("Informe outro número"))

console.log(n1 > n2)
console.log(n1 < n2)
console.log(n1 == n2)
console.log("--------------------------------------")

// 2 - Idade para Votar 

let idade = Number(prompt("Qual sua idade"))
console.log(idade >= 16)
console.log("--------------------------------------")

// 3 - Maioridade

let idade1 = Number(prompt("Informe sua idade"))
console.log(idade1 >= 18)
console.log(idade1 >= 60)
console.log("--------------------------------------")

// 4 - Verificação de Login

let nome = (prompt("Informe seu nome"))
console.log(nome == "admin")
console.log("--------------------------------------")

// 5 - Saldo bancário

let saldo = 2500
let saque = Number(prompt("Informe o valor do saque"))
console.log(saldo > saque)
let resto = saldo - saque
console.log(resto > 100)
console.log("--------------------------------------")

// 6 - Média do Aluno

let nota1 = Number(prompt("Informe a primeira nota"))
let nota2 = Number(prompt("Informe a segunda nota"))
let media = (nota1 + nota2) / 2
console.log(media >= 6)
console.log("--------------------------------------")

// 7 - Preço do Produto

let preco = Number(prompt("Qual o valor do produto?"))
console.log (preco > 50)
console.log( preco < 20)
console.log("--------------------------------------")

// 8 - Velocidade da Via

let velocidade = Number(promtpt("Qual a velocidade do carro? "))
console.log(velocidade > 80)
console.log(velocidade > 120)
console.log("--------------------------------------")

// 9 - Altura para Brinquedo

let altura = Number(prompt("Informe sua altura (metros)"))
console.log( altura >= 1.40)
console.log("--------------------------------------")

// 10 - Nome cadastrado

let nome1 = Number(prompt("Informe seu nome de usuário"))
console.log(nome1 == "Maria")
console.log(nome1 != "João")
console.log("--------------------------------------")

// 11 - Senha Simples

let senha = Number("Informe a senha:")
console.log(senha == "1234")
console.log("--------------------------------------")

// 12 - Parcelamento

let conta = Number("Informe o valor da compra")
let parcela = Number("Informe o valor da parcela")
console.log(parcela <= 200)
console.log("--------------------------------------")

// 13 - Idade em Meses

let idadeM = Number(prompt("Informe sua idade"))
let meses = idadeM / 12
console.log(meses > 200)
console.log("--------------------------------------")
