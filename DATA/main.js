
let dataAtual = new Date()
console.log(dataAtual)

let dia = dataAtual.getDate()//1-31
let mes = dataAtual.getMonth()//0-11
let ano = dataAtual.getFullYear()//ex 2025
console.log(`${dia}/${mes+1}/${ano}`) //dd/mm/aaaa

let horas = dataAtual.getHours()//0-23
let minutos = dataAtual.getMinutes()//0-59
console.log(`${horas}:${minutos}`)//horas:minutos