// ex1
console.log("------ex1------")
let idade = Number(prompt("Qual a sua idade?"))
let carteira = true

if(idade >= 18 && carteira == true) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}

// ex2
console.log("------ex2------")
let anos = Number(prompt("Quantos anos de trabalhados nessa empresa?"))
let projetos = Number(prompt("Quantos projetos realizados?"))

if(anos >= 5 || projetos > 10) {
    console.log("Você está elegível para promoção")
} else {
    console.log("Você não está elegível para promoção")
}

// ex3
console.log("------ex3------")
let id = Number(prompt("Quantos anos você tem?"))

if(id >= 18 && id <= 30){
    console.log("Você pode entrar no evento")
} else {
    console.log("Você não pode entrar no evento")
}

// ex4
console.log("------ex4------")
let age = Number(prompt("Qual é a sua idade?"))
let exp = true

if(age >= 21 && exp == true){
    console.log("Você foi aceito para a vaga")
} else {
    console.log("Você não foi aceito para vaga")
}

// ex5
console.log("------ex5------")
let usuario = prompt("Nome de usuário:")
let senha = prompt("Digite a senha:")

if(usuario == "admin" && senha == "1234") {
    console.log("Login bem-sucedido")
} else {
    console.log("Nome de usuário ou senha incorretos")
}

// ex6
console.log("------ex6------")
let num = Number(prompt("Escolha um número:"))

if(num >= 10 && num <= 20) {
    console.log("O número está dentro do intervalo entre 10 e 20")
} else if(num >= 30 && num <= 50){
    console.log("O número está dentro do intervalo entre 30 e 50")
} else {
    console.log("Ele não está dentro do intervalo de 10 e 20 nem 30 e 50")
}

// ex7
console.log("------ex7------")
let nume = Number(prompt("Digite um número:"))

if(nume <= 10 || nume >= 100) {
    console.log("O número é aceito")
} else if (nume == 50){
    console.log("O número não é aceito")
}