function suma(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    document.getElementById("resSuma").innerHTML =
        "Resultado: " + (n1 + n2);
}
