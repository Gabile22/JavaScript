console.log("---------ex1--------")
let filmes = ["A culpa é das estrelas", "A cinco passos de você", "Os farofeiros",]

console.log("Filme favorito: ", filmes[1])

console.log("---------ex2--------")
let frutas = ["Ameixa", "Uva", "Morango", "Laranja", "Mirtilo"]
console.log("Fruta: ", frutas[3])

console.log("---------ex3--------")
let cores = ["roxo", "rosa", "azul"]
for(let i = 0; i < cores.length; i++){
    console.log(cores[i])
}
console.log("adicionado na lista")
cores.push("verde")
console.log(cores)

console.log("---------ex4--------")
let nums = ["1", "2", "3", "4"]
for(let i = 0; i < nums.length; i++){
    console.log(nums[i])
}
console.log("remove o primeiro da lista")
nums.pop()
console.log(nums)

console.log("----------ex5-------")
let cid = ["Suzano", "Poá"]
for(let i = 0; i < cid.length; i++){
    console.log(cid[i])
}
cid.unshift("Mogi")
console.log(cid)

console.log("---------ex6-------")
let animal = ["papagaio", "gato", "peixe"]
for(let i = 0; i < animal.length; i++) {
    console.log(animal[i])
    
}
animal.shift()
console.log(animal)

console.log("---------ex7-------")
let carros = ["civic", "fusca", "celta", "camaro"]
for(let i = 0; i < carros.length; i++) {
    console.log(carros[i])
}
console.log(carros)

console.log("---------ex8--------")
let vazio = []
console.log("adiciona no final")
vazio.push("3", "2", "1")
console.log(vazio)

console.log("adiciona ao início")
vazio.unshift("4")
console.log(vazio)

console.log("remove o  último")
vazio.pop()
console.log(vazio)

console.log("remove o primeiro")
vazio.shift()
console.log(vazio)

console.log("array final")
for (let i = 0; i < vazio.length; i++){
    console.log(vazio[i])
}
console.log(vazio)