// ex1
let id = Number(prompt("Qual a sua idade?"))
if (id <= 12) {
    console.log("Criança")
} else if (id <= 17) {
    console.log("Adolescente")
} else if (id <= 59) {
    console.log("Adulto")
} else if (id >= 60) {
    console.log("Idoso")
}
console.log("---------------------------------")
// ex2
let temp = Number(prompt("Qual é a temperatura?"))
if (temp < 10) {
    console.log("Muito Frio")
} else if (temp < 20) {
    console.log("Frio")
} else if (temp < 29) {
    console.log("Agradável")
} else if (temp >= 30) {
    console.log("Muito Quente")
}
console.log("---------------------------------")
// ex3
let tur = prompt("Qual é o seu turno?")
if (tur = "M") {
    console.log("Bom dia!")
} else if (tur = "V") {
    console.log("Boa tarde!")
} else if (tur = "N") {
    console.log("Boa noite!")
}else {
    console.log("Turno inválido")
}
console.log("---------------------------------")
// ex4
let valor = Number(prompt("Qual o valor da compra?"))
if (valor <= 100) {
    console.log("Desconto de 5%")
} else if (valor <= 200) {
    console.log("Desconto de 10%")
}else if (valor > 201){
    console.log("Desconto de 15%")
}
console.log("---------------------------------")
// ex5
let not = Number(prompt("Qual é a nota?"))
if (not >= 90) {
    console.log("A")
}else if (not >= 80) {
    console.log("B")
}else if (not >= 70) {
    console.log("C")
}else if (not >= 60) {
    console.log("D")
} else if (not < 60) {
    console.log("F")
}
console.log("---------------------------------")
// ex6
 let dia = Number(prompt("Dia da semana:"))
 if (dia == 1) {
    console.log("Domingo")
 } else if (dia == 2) {
    console.log("Segunda-Feira")
 } else if (dia == 3) {
    console.log("Terça-Feira")
 } else if (dia == 4) {
    console.log("Quarta-Feira")
 } else if (dia == 5) {
    console.log("Quinta-Feira")
 } else if (dia == 6) {
    console.log("Sexta-Feira")
 } else if (dia == 7) {
    console.log("Sábado")
}
console.log("---------------------------------")
// ex7
let dist = Number(prompt("Distância da pista:"))
if (dist <= 400) {
   console.log("Pista curta")
} else if (dist <= 800) {
   console.log("Pista média")
} else if (dist <= 1500) {
   console.log("Pista longa")
} else if (dist > 1501) {
    console.log("Pista muito longa")
}
console.log("---------------------------------")
// ex8
let pont = Number(prompt("Qual a pontuação do jogador?"))
if (pont <= 1000) {
    console.log("Iniciante")
} else if (pont <= 5000) {
    console.log("Intermediário")
} else if(pont <= 10000) {
    console.log("Avançado")
} else if(pont > 10001) {
    console.log("Iniciante")
}