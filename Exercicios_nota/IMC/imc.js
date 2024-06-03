/**
 * @author João Victor Santos
 */

let altura, peso, imc

document.getElementById('calcular').addEventListener('click', calcularIMC);

function calcularIMC() {
    altura = document.getElementById('altura').value;
    peso = document.getElementById('peso').value;

    imc = peso / (altura * altura);

    document.getElementById('resultado').value = `Seu IMC é ${imc.toFixed(2)}`;
}
