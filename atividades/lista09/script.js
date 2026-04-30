// 01 - Pode Dirigir

let idade = Number(prompt("Informe sua idade"))
let cnh = prompt("Possuí CNH? (sim/nao)")
console.log(idade >= 18 && cnh == "sim")
console.log("-------------------------------")

// 02 - Aprovação Escolar

let nota = Number(prompt("Informe a nota"))
let faltas = Number(prompt("Quantos dias faltou?"))
console.log(nota >= 6 && faltas <= 10)
console.log("-------------------------------")

// 03 - Acesso ao Evento

let idade1 = Number(prompt("Qual sua idade"))
let convite = prompt("Possuí convite? (sim/nao)")
console.log(idade1 > 18 && convite == "Sim")
console.log("-------------------------------")

// 04 - Empréstimo Bancário

let salario = Number(prompt("Informe seu salário"))
let nome = prompt("Seu nome está limpo (sim/nao)?")
console.log(salario >= 2500 && nome == "sim")
console.log("-------------------------------")

// 05 - Entrada

let casamento = prompt("Possuí convite? (sim/nao)")
let lista = prompt("Seu nome está na lista? (sim/nao)")
console.log(casamento == "sim" || lista == "sim")
console.log("-------------------------------")

// 06 - Desconto na barbearia

let valor = Number(prompt("Qual foi o valor da compra?"))
let cliente = prompt("Já é cliente? (sim/nao)")
console.log(valor >= 80 || cliente == "sim")
console.log("-------------------------------")

// 07 - Recuperação Escolar

let nota1 = Number(prompt("Qual foi sua nota?"))
let trabalho = prompt("Fez trabalho extra? (sim/nao)")
console.log(nota1 > 5 && trabalho == "sim")
console.log("-------------------------------")

// 08 - Liberação do sistema

let senha = prompt("Qual sua senha?")
let digital = prompt("A digital foi reconhecida? (sim/nao)")
console.log(senha == "senha" && digital == "sim")
console.log("-------------------------------")

// 09 - Conta Bloqueada

let bloqueado = prompt("A conta está bloqueada? (sim/nao)")
console.log(bloqueado == "sim")
console.log("-------------------------------")

// 10 - Cadastro Incompleto

let temCadastro = prompt("Já possuí cadastro? (sim/nao)")
console.log(temCadastro == "sim")

// 11 - Acesso Completo

let login = prompt("Informe o login")
let senha1 = prompt("Informe a senha")
console.log(login == "ADMIN" && senha1 == "senai2026")
console.log("-------------------------------")

// 12 - Compra parcelada

let valor1 = Number(prompt("Informe o valor da compra"))
let cartao = prompt("Possuí o cartão da loja? (sim/nao)")
let nome1 = prompt("Seu nome está limpo? (sim/nao)")
console.log(valor > 300 && cartao == "sim" && nome1 == "sim")
console.log("-------------------------------")

// 13 - Matrícula
 
let idade2 = Number(prompt("Informe a idade"))
let doc = prompt("Entregou os documentos? (sim/nao)")
let matricula = prompt("A matricula foi paga? (sim/nao)")
console.log(idade2 >= 17 && doc == "sim" && matricula == "sim")
console.log("-------------------------------")

// 14 - Entrada no Clube
let idade3 = Number(prompt("Informe sua idade"))
let socio = prompt("Já é sócio? (sim/nao)")
let convidado = prompt("É convidado? (sim/nao)")
console.log(idade >= 15 && socio == "sim" || convidado == "sim")
console.log("-------------------------------")