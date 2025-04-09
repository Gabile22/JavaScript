
let contador = 0
let intervalo;
function inicarContador() {
    intervalo = setInterval(function () {
        contador++
        console.log("Contador: " + contador)
    }, 1000)
}
function pararContador() {
    clearInterval(intervalo)
}

iniciarContador()