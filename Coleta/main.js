//main.js

//Funções matemáticas
let num = 4.7

//Arredondar números
console.log(Math.round(num))//inteiro mais próximo
console.log(Math.floor(num))//arredonda para baixo
console.log(Math.ceil(num))//arredonda para cima
//Número Alatório
console.log(Math.random())//número aleatório entre 0 e 1
console.log(Math.random()*10)//número aleatório entre 0 e 10


//Funções de String
let texto = "Eu amo javaScript"
//manipular String
console.log(texto.toUpperCase()) //Deixa tudo maiusculo
console.log(texto.toLowerCase()) //Deixa tudo minusculo
console.log(texto.trim())//Remove espaços antes e depois do texto
//Localizar texto
console.log(texto.charAt(5))//mostra a letra que está nessa posição
console.log(texto.includes("javaScript"))//verifica se tem a palavra
//Trocar textos
console.log(texto.replace("amo", "adoro"))


//Funções Númericas
let numero = "42.85"
console.log(parseInt(numero))//string para numero inteiro
console.log(parseFloat(numero))//string para numero decimal
console.log(Number(numero).toFixed(1))//Define quantas casas decimais