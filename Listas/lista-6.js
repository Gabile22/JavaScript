console.log("-----ex1-----")
let dia = Number(prompt("Número de 1 a 7: "))
switch (dia) {
    case 1:
        console.log("O dia é domingo")
        break
    case 2:
        console.log("O dia é segunda-feira")
        break
    case 3:
        console.log("O dia é terça-feira")
        break
    case 4:
        console.log("O dia é quarta-feira")
        break
    case 5:
        console.log("O dia é quinta-feira")
        break
    case 6:
        console.log("O dia é sexta-feira")
        break
    case 7:
        console.log("O dia é sábado")
        break
        default:
            console.log("Número inválido. Insira um valor entre 1 e 7.")
}

console.log("-----ex2-----")
let id = Number(prompt("Insira 5, 10, 15, 20 ou 30:"))
switch (id) {
    case 5:
        console.log("Infantil A")
        break
    case 10:
        console.log("Infantil B")
        break
    case 15:
        console.log("Juvenil A")
        break
    case 20:
        console.log("Juvenil B")
        break
    case 30:
        console.log("Adulto")
        break
        default:
            console.log("Idade inválida. Insira 5, 10, 15, 20 ou 30")
}

console.log("-----ex3-----")
let turno = prompt("Informe o seu turno(M, V, N)")
switch (id) {
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N ":
        console.log("Boa noite!")
        break
        default:
        console.log("Turno inválido. Insira M, V ou N")
}

console.log("-----ex4-----")
let n = prompt("Escolha um número de 1 a 5:")
switch (n) {
    case 1:
        console.log("Cada dia é uma nova chance para crescer e aprender.")
        break
    case 2:
        console.log("Hoje é um ótimo dia para começar algo novo.")
        break
    case 3:
        console.log("Você é mais forte do que imagina. ")
        break
    case 4:
        console.log("Cada pequeno passo te leva mais perto do que deseja.")
        break
        default:
        console.log("Número fora do intervalo. Insira um valor entre 1 e 5.")
}

console.log("-----ex5-----")
let est = prompt("Escolha um número de 1 a 4:")
switch (est) {
    case 1:
        console.log("Primaveira")
        break
    case 2:
        console.log("Verão")
        break
    case 3:
        console.log("Outono")
        break
    case 4:
        console.log("Inverno")
        break
        default:
        console.log("Estação inválida. Insira um número de 1 a 4.")
}

