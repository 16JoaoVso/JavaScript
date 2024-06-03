/**
 * @author João Victor Santos
 */
    let  custo, lucro, precoVenda

function calcularPrecoVenda() {
    custo = document.getElementById("custo").value;
    lucro = document.getElementById("lucro").value / 100;
    precoVenda = custo * (1 + lucro);
    document.getElementById("resultado").innerHTML = `R$ ${precoVenda.toFixed(2)}`;
}

function limparCampos() {
    document.getElementById("custo").value = "";
    document.getElementById("lucro").value = "";
    document.getElementById("resultado").innerHTML = "";
}