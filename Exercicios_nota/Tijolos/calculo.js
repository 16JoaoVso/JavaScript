/**
 * @author João Victor Santos
 */

let tijolosPorMetroQuadrado = 28;

        function calcularTijolos() {
            let area = document.getElementById("area").value;
            let areaNum = parseFloat(area);
            let tijolos = areaNum * tijolosPorMetroQuadrado;
            document.getElementById("resultado").innerHTML = `Número de tijolos: ${tijolos}`;
        }