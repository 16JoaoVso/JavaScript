/**
 * Estrutura de dados
 * Objetos
 * @author João Victor Santos
 */

const funcionario1 = {}
console.log(typeof funcionario1)
funcionario1.nome = "José"
funcionario1.cargo = "Professor"
funcionario1.email = "josedeassisfilho@gmail.com"
funcionario1.salario = 8000
funcionario1.insta = "@prof.joseassis"
// Listar os dados da estrutura (CRUD Read)
console.log(funcionario1)
console.log(funcionario1.cargo)
// Modificar os dados da estrutura (CRUD Update)
funcionario1.nome = "José de Assis"
console.log(funcionario1)
//excluir dados da estrutura (CRUD delete)
delete funcionario1.insta
console.log(funcionario1)

const funcionario2 = {
    nome: "Miles Morales",
    cargo: "CEO",
    email: "Spiderman@gmail.com",
    salario: 35000
}

console.log(funcionario2)

const endereco1 = {
    logradouro: "Multiverso",
    cidade: "Brooklyn",
    estado: "New York"
}

const funcionario3 = {
    nome: "Peter Parker",
    cargo: "Fotografo",
    email: "peterP@gmail.com",
    salario: 5000,
    ...endereco1//Spread operator (união de 2 estrturas)
}
console.log(funcionario3)

const funcionario4 = {
    nome: "Gwen Stacy",
    cargo: "Baterista",
    email: "SpiderG@gmail.com",
    salario: 1200,
    ...endereco1//Spread operator (união de 2 estrturas)
}
console.log(funcionario4)

const funcionario5 = {
    nome: "Hobby Brown",
    cargo: "Guitarrista",
    email: "PunkAranha@gmail.com",
    salario: 1100,
    uniforme: {
        versao: "Spider Punk", 
        ano: 2014,
        multiverso:"Terra-138"
    },
    suitUp: () => {
        console.log("🕷")
    }
}

console.log(funcionario5)
console.log(funcionario5.uniforme.versao)
funcionario5.suitUp() //executar a função interna da estrutura