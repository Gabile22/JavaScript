console.log("----------ex1-----------")
for (let cont = 1; cont <= 30; cont++){
    console.log(cont)
}
console.log("-----------ex2-----------")
for(let con = 30; con >= 1; con--){
    console.log(con)
}
console.log("-----------ex3-----------")
for (let conta = 1; conta <= 5; conta++){
    let num = prompt("Digite 5 números;")
if (num >= 50){
    console.log("Acima da media")
} else {
    console.log("Abaixo da média")
}}
console.log("-----------ex4-----------")
let numero = prompt("Escolha um número: ")
for(let mult = 1; mult <= 10; mult++) {
    let resultado = mult * numero
    console.log(resultado)
}
console.log("-----------ex5-----------")
let numb = prompt("Escolha quantos patinhos vão passear: ")
for (let algor = numb; algor >= 1; algor--){
    sub = numb - 1
    console.log(algor, "patinhos foram passear Além das montanhas Para brincar A mamãe gritou: Quá, quá, quá, quá Mas só ", algor-1, " patinhos voltaram de lá.")
}
console.log("------------ex6---------")
for (let cond = 1; cond <= 10; cond++){
let id = prompt("Digite dez idades: ")
if (id >= 18) {
    console.log("Maior de idade")
}else {
    console.log("Menor de idade")
}}
console.log("-----------ex7----------")
for (let voto = 1; voto <= 5; voto++){
    let vt= prompt("Digite o voto: ")
    if (vt == 1 || vt== 2|| vt== 3|| vt== 4){
        console.log("voto para os respectivos candidatos")
    } else if (vt == 5){
        console.log("voto nulo")
    }else if (vt ==6){
        console.log("voto em branco")
    }
}