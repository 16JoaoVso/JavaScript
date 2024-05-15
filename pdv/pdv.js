/**
 * PDV - Exercicio (Ponto de Vendas)
 * @author João Victor Santos
 */

    let total = document.getElementById("total").value;
    let desconto = document.getElementById("porcentagem").value;
    let resultado;
    let resultadoD;
 
function Calcular() {
    total = document.getElementById("total").value;
    desconto = document.getElementById("porcentagem").value;
    resultado = total  % desconto / 100;
 
    document.getElementById("desconto").value = resultado;

}
