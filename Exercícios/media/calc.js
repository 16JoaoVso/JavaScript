function calcularMedia() {
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);
    var nota4 = parseFloat(document.getElementById('nota4').value);

    var media = (nota1 + nota2 + nota3 + nota4) / 4;

    var resultado = document.getElementById('resultado');

    if (isNaN(media)) {
        resultado.innerHTML = "Por favor, insira todas as notas.";
        resultado.style.color = "red";
    } else {
        resultado.innerHTML = "Média: " + media.toFixed(1) + "<br>";

        if (media < 4) {
            resultado.innerHTML += "Status: REPROVADO";
            resultado.style.color = "red";
        } else if (media >= 4 && media < 7) {
            resultado.innerHTML += "Status: RECUPERAÇÃO";
            resultado.style.color = "orange";
        } else {
            resultado.innerHTML += "Status: APROVADO";
            resultado.style.color = "green";
        }
    }
}
