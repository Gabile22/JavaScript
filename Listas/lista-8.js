//ex1
let contador = 1
while(contador <= 20) {
    console.log("while:", contador)
    contador++
}
//ex2
let res = prompt("Deseja continuar?")
do {
    if (res == "n") {
        console.log("não")
    }
    else if (res =="s"){
       console.log("sim")
    }
    res = prompt("Deseja continuar?")
} while (res !="s")
//ex3
let contador1 = 1
let num = Number(prompt("Escolha um número: "))
while(contador1 <= num) {
    console.log("while:", contador1)
    contador1++
}
//ex4
let nume = 1
do {
    console.log(nume)
    nume += 2
} while(nume <= 31)
//ex5
let alg = 1
do {
    let num = Number(prompt("Escolha cinco números:"))
    if (num > 0) {
        console.log("Positivo")
    }
    else if (num < 0) {
        console.log("Negativo")
    } else {
        console.log("O número é 0")
    }
    alg++
}while (alg <= 5)
//ex6
let oper
do {
    oper = prompt("Deseja continuar? Digite s para SIM e n para NÃO.")
    if (oper == "s") {
        let n1 = Number(prompt("Digite 2 números para a soma:"))
        let n2 = Number(prompt("Digite 2 números para a soma:"))
        let soma = n1 + n2
        console.log("A soma é:", soma)
    }
}while (oper == "s")