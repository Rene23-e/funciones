function resta(){
    let n1 = Number(document.getElementById("r1").value);
    let n2 = Number(document.getElementById("r2").value);

    document.getElementById("resResta").innerHTML =
        "Resultado: " + (n1 - n2);
}