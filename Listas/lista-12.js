console.log("-----------ex1----------")
let nome = prompt("Qual o seu nome?")
let saudacao = function(nome){
    console.log("Olá", nome, "Como vai?")
}
saudacao(nome)

console.log("-----------ex2----------")
let a = Number(prompt("Digite o primeiro número: "))
let b = Number(prompt("Digite o segundo número: "))
let soma = function(a,b){
    let resultado = a + b
    return resultado
}
console.log(soma(a,b))

console.log("-----------ex3----------")
let base = Number(prompt("Qual é a base do retângulo?"))
let alt = Number(prompt("Qual é a altura do retângulo?"))
let area = function(base,alt){
    let resultado = base * alt
    return resultado
}
console.log(area(base,alt))

console.log("------------ex4----------")
let numero = Number(prompt("Digite um número: "))
let dobro = (numero) => {
    let resultado = numero * 2
    return resultado
}
console.log(dobro(numero))

console.log("-------------ex5---------")
let num = Number(prompt("Escolha um número: "))
let quadrado = (num) => {
    let resultado =num * num
    return resultado
}
console.log(quadrado(num))

console.log("------------ex6------------")
let ida = Number(prompt("Fale sua idade: "))
let maioridade = (ida) => {
    if(ida >= 18){
        console.log("Você é maior de idade")
    }else{
        console.log("Você é menor de idade")
    }
}
console.log(maioridade(ida))

console.log("-------------ex7----------")
let n1 = Number(prompt("Primeira nota:"))
let n2 = Number(prompt("Segunda nota:"))
let n3 = Number(prompt("Terceira nota:"))
let media = (n1,n2,n3) => {
    let resultado = (n1 + n2 + n3)/3
    return resultado
}
console.log(media(n1,n2,n3))