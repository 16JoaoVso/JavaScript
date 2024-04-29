/**
 * JS - Simulador de operadores lógicos
 * @author Professor José de Assis
 */

let valor // Valor recebido
// 1 Acender a lâmpada
// 2 Apagar a lâmpada
// 3 Quebrar a lâmpada
let quebrada = false // Estado da lâmpada

function simular(valor) {
    // Quebrar a lâmpada
    if (valor === 3) {
        let beep = new Audio()
        beep.src = "./sound/glassbreaking.wav"
        beep.play()
        document.getElementById("lamp").src = "./img/broken.jpg"
    }
    
}