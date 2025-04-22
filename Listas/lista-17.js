//1
class Livro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo
        this.autor = autor
        this.paginas = paginas
    }
    mostrarDetalhes(){
        console.log(`Titulo: ${this.titulo}, Autor: ${this.autor}, Paginas: ${this.paginas}`)
    }
}
    const meuLivro = new Livro("Até o verão terminar", "Collen Hoover", 336)
    meuLivro.mostrarDetalhes()

//2
class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor
    }
    sacar(valor){
        this.saldo -= valor
    }
    verSaldo(){
        console.log(`${this.titular} tem ${this.saldo} `)
    }
}
const banco = new ContaBancaria ("Gabriela", 170)
banco.verSaldo()
banco.depositar(170)
banco.verSaldo()
banco.sacar(100)
banco.verSaldo()

//3
class Pet {
    constructor(nome, especie, idade) {
        this.nome = nome
        this.especie = especie
        this.idade = idade
    }
    falar(){
        if(this.especie == "cachorro") {
            console.log(`${this.especie} = "Au au!"`)
        } else if(this.especie == "gato") {
            console.log(`${this.especie} = "Miau!"`)
        }else if(this.especie == "ave") {
            console.log(`${this.especie} = "Piu piu!"`)
        }else if(this.especie == "roedor") {
            console.log(`${this.especie} = "Fis fis!"`)
        }
    }
}
const ani1 = new Pet ("nina", "cachorro", 13)
ani1.falar()
const ani2 = new Pet ("mimi", "gato", 9)
ani2.falar()
const ani3 = new Pet ("nick", "ave", 1)
ani3.falar()

//4
class filme {
    constructor(titulo, genero, duracao){
        this.titulo = titulo
        this.genero = genero
        this.duracao = duracao
    }
    assistir() {
        console.log(`Você está assistindo ${this.titulo}, do gênero ${this.genero}, que dura ${this.duracao} minutos.`)
    }
}
const meuFilme = new filme("A culpa é das estrelas", "Romance/Comédia", 126)
meuFilme.assistir()

//5
class musica {
    constructor(titulo, artista, tempo) {
        this.titulo = titulo
        this.artista = artista
        this.tempo = tempo
    }
    tocar(){
        console.log(`Tocando ${this.titulo} de ${this.artista} com ${this.tempo} minutos.`)
    }
}
const minhaMusica = new musica ("Matilda", "Harry Styles", 4)
minhaMusica.tocar()