/** 
 * Tipagem dinâmica
 * Constantes e variáveis
 */ 

console.clear()

let nome = "João Victor"
console.log(nome)
console.log(typeof(nome))
nome = "Zé de assis"
console.log(nome)
console.log(nome.replace("Zé","Little José"))
// Concatenação
console.log("Professor: " + nome)
console.log(`Professor: ${nome}`)

console.log("NUMBERS_____________________")
let peso = 62 
let altura = 1.65
console.log(typeof (peso))
console.log(typeof (altura))
console.log(Number.isInteger (peso))
console.log(Number.isInteger (altura))
let imc = peso / (altura * altura)
console.log(`IMC: ${(imc.toFixed(2))}`)

console.log("BOOLEANS_____________________")
let sw = true
console.log(typeof(sw))
console.log(`Chave: ${sw}`)

// ATEÇÂO !!!
console.log(10 / 0)
console.log("3" + 2) // Concatena 
console.log("3" - 2) // Faz a conta
console.log("3" * 2) 
console.log("3" / 2) 
console.log("3X" - 2) // NaN not a number
console.log(0.5 + 0.5) 
console.log(0.1 + 0.2) 