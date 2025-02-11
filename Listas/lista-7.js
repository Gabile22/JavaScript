console.log("ex1")
let contador = 0
while(contador <= 10){
    console.log(contador)
    contador++
}
//////////////////////////////
console.log("ex2")
let num = Number(prompt("Digite um número:"))
let multi = 1
while (multi <= 10) {
    let resultado = num * multi
    console.log(num, "x", multi, "=", resultado)
    multi += 1 
}
//////////////////////////////
console.log("ex3")
let cont = 10
while (cont >= 1) {
    console.log(cont)
    cont--
}
/////////////////////////////
console.log("ex4")
let senha = prompt("Digite a senha: ")
while(senha != "12345") {
    senha = prompt("Tente novamente: ")
    if (senha == "12345") {
        console.log("Senha correta")
    }
}
///////////////////////////
console.log("ex5")
let contagem = 50
while(contagem <= 100) {
    console.log(contagem)
    contagem++
}
///////////////////////////
console.log("ex6")
let nume = 0
while(nume <= 100){
    console.log(nume)
    nume += 5
}
///////////////////////////
console.log("ex7")
let algor = "Eu gosto de JavaScript"
let num1 = 1
while(num1 <= 5) {
    console.log(algor)
    num1++
}
//////////////////////////
console.log("ex8")
let nome = prompt("Digite o seu nome: ")
let numb = Number(prompt("Digite um número: "))
while( numb >= 1) {
    console.log(nome)
    numb --
}