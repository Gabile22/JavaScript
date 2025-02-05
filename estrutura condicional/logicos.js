// Verifica se a pessoa pode votar
let idade = 16
let titutloEleitor = true
if (idade >= 18 && titutloEleitor == true) {
    console.log("Pode votar")
} else {
    console.log("Não pode votar")
}
// Verifica se o número está dentro do intervalo
let numero = 15
if (numero >= 10 && numero <= 20) {
    console.log("O número está entre 10 e 20")
} else {
    console.log("O número está fora do intervalo")
}

// Compra com desconto
let valor = 150
let ClienteVip = false
if(valor >= 100 || ClienteVip == true) {
    console.log("Você ganhou frete grátis")
} else {
    console.log("Tem que pagar o frete")
}
// Número no intervalo
let num = 10
if (num >= 5 || num <= 20) {
    console.log("Funcionou")
} else {
    console.log("Não funcionou")
}