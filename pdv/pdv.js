/**
 * PDV - Exercicio (Ponto de Vendas)
 * @author João Victor Santos
 */

let total;
let totalnota;
let desconto;
let totald;
let resultado;
let resultadotroco;
 
function Calcular() {
    total = parseFloat(document.getElementById("total").value);
    desconto = parseFloat(document.getElementById("desconto").value);
   
    resultado = total * (desconto / 100);
    totald = total - resultado;
 
    document.getElementById("resultado").value = resultado;
    document.getElementById("totald").value = totald;
}
 
function CalcularTroco() {
    totalnota = parseFloat(document.getElementById("valor").value);
    totald = parseFloat(document.getElementById("totald").value);
 
    resultadotroco = totalnota - totald;
 
    document.getElementById("troco").value = resultadotroco;
}