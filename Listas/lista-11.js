console.log("---------ex1---------")
function JavaScript() {
    console.log("Eu gosto de JavaScript")
}

JavaScript()

console.log("---------ex2--------")
function contarAteCinco () {
    for (let i = 1; i <= 5; i++){
        console.log(i)
    }
}
contarAteCinco()

console.log("---------ex3--------")
let nome = prompt("Digite seu nome: ")
function saudacao (){
    console.log("Olá,", nome,"!", "Seja bem-vindo(a)!")
}
saudacao()

console.log("---------ex4--------")
function multiplicarDoisNumeros (a,b){
    let mult = a * b
    return mult
}
console.log(multiplicarDoisNumeros(5,3))

console.log("----------ex5--------")
let id = prompt("Digite sua idade: ")
function verificarIdade (){
    if(id >= 18){
        console.log("Maior de idade")
    }else{
        console.log("Menor de idade")
    }
}
verificarIdade()

console.log("---------ex6---------")
let a = Number(prompt("Escolha dois números:"))
let b = Number(prompt("Escolha dois números:"))
function somar(a,b) {
    let resultado = a + b
    return resultado
}
console.log(somar(a,b))
somar()

console.log("----------ex7---------")
let lar = Number(prompt("Qual a largura do retângulo: "))
let alt = Number(prompt("Qual a altura do retângulo: "))
function calcularAreaRetangulo(lar,alt){
    let resul = lar * alt
    return resul
}
console.log(calcularAreaRetangulo(lar,alt))
calcularAreaRetangulo()

console.log("-----------ex8--------")
let id1 = Number(prompt("Idade1: "))
let id2 = Number(prompt("Idade2: "))
function compararIdade (id1,id2){
    if (id1 > id2){
        console.log("A primeira pessoa é a mais velha")
    }else if (id1 < id2){
        console.log("A segunda pessoa é a mais velha")
    }else if (id1 == id2){
        console.log("As duas pessoas tem a mesma idade")
    }
}
console.log(compararIdade(id1,id2))
compararIdade