/**
 * JS - Simulador de operadores lógicos
 * @author João Victor Santos
 */

let valor // Valor recebido
// 1 Acender a lâmpada
// 2 Apagar a lâmpada
// 3 Quebrar a lâmpada
let quebrada = false // Estado da lâmpada



//chaves
let sw1 = false
let sw2 = false
let 

function simular(valor) {
    //chaves


    if (valor === 1 && sw1 === false) {
        document.getElementById("sw1").src = "./img/swon.png"
        sw1 = true
    } else if (valor === 1 && sw1 === true) {
        document.getElementById("sw1").src = "./img/swoff.png"
        sw1 = false
    } else if (valor === 2 && sw2 === false) {
        document.getElementById("sw2").src = "./img/swon.png"
        sw2 = true
    } else if (valor === 2 && sw2 === true) {
        document.getElementById("sw2").src = "./img/swoff.png"
        sw2 = false
    }


    // Quebrar a lâmpada
    if (valor === 3) {
        let beep = new Audio()
        beep.src = "./sound/glassbreaking.wav"
        beep.play()
        document.getElementById("lamp").src = "./img/broken.jpg"
    }


    //AND
    if (quebrada === false && path === "/fundamentos/Exercícios/Simulador/and.html"){
        if(sw1 === true && sw2 === true) {
            document.getElementById("lamp").src = "./img/on.jpg"
        } else {
            document.getElementById("lamp").src = "./img/off.jpg"
        }
    }

    
     //OR
     if (quebrada === false && path === "/fundamentos/Exercícios/Simulador/or.html"){
        if(sw1 === true || sw2 === true) {
            document.getElementById("lamp").src = "./img/on.jpg"
        } else {
            document.getElementById("lamp").src = "./img/off.jpg"
        }
    }
    

    //NOT
    if (quebrada === false && path === "/fundamentos/Exercícios/Simulador/not.html"){
        if(!sw1) {
            document.getElementById("lamp").src = "./img/on.jpg"
        } else {
            document.getElementById("lamp").src = "./img/off.jpg"
        }
    }
}
