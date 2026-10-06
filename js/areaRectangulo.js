function areaRectangulo() {
let base = Number(document.getElementById("base").value);
let altura = Number(document.getElementById("altura").value);
 
let area = base * altura;
 
document.getElementById("resRectangulo").innerHTML =
"El área del rectángulo es: " + area;
}