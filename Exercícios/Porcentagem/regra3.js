/**
 * Regra de 3
 */

// Importação de pacote
const read = require('readline-sync')

//Declaração de variáveis
let x, y, valor

console.clear()
console.log("Regra de 3")
console.log("X% de Y = valor")

// Entrada de dados
x = read.question("Digite o valor de X: ")
y = read.question("Digite o valor de Y: ")

// Processamento
valor = (x * y) / 100

// Saída
console.log(`${x}% de ${y} = ${valor.toFixed(2)}`)