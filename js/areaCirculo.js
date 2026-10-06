function areaCirculo(){
    let radio = Number(document.getElementById("radio").value);

    let area = Math.PI * radio * radio;

    document.getElementById("resCirculo").innerHTML =
        "Área: " + area.toFixed(2);
}
