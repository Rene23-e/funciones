

function multiplicar(){
    let n1 = Number(document.getElementById("m1").value);
    let n2 = Number(document.getElementById("m2").value);

    document.getElementById("resMultiplicar").innerHTML =
        "Resultado: " + (n1 * n2);
}
