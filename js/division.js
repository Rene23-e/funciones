function division(){
    let n1 = Number(document.getElementById("d1").value);
    let n2 = Number(document.getElementById("d2").value);

    document.getElementById("resDivision").innerHTML =
        "Resultado: " + (n1 / n2);
}
