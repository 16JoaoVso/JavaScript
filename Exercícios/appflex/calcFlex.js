/**
 *  APP flex
 * @author João Victor Santos de Oliveira
 */

let etanol, gasolina

function calcular() {
    etanol = Number(frmFlex.txtEtanol.value)
    gasolina = Number(frmFlex.txtGasolina.value)
    // validação de campos obrigatorios
    if (frmFlex.txtEtanol.value === "") {
        alert("Preencha o valor do etanol")
        frmFlex.txtEtanol.focus()
    } else  if (frmFlex.txtGasolina.value === "") {
        alert("Preencha o valor da gasolina")
        frmFlex.txtGasolina.focus()
    } else {
    // console.log(etanol)
    // console.log(gasolina)
    if (etanol < 0.7 * gasolina) {
        document.getElementById('status').src = "./img/etanol.png"
    } else {
        document.getElementById('status').src = "./img/gasolina.png" 
    }    
    }

   
}

function limpar() {
    document.getElementById('status').src = "./img/flex.png"
}