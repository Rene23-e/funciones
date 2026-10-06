function calcularPromedio() {
    let n1 = parseFloat(document.getElementById('n1').value) || 0;
    let n2 = parseFloat(document.getElementById('n2').value) || 0;
    let n3 = parseFloat(document.getElementById('n3').value) || 0;
    let promedio = (n1 + n2 + n3) / 3;
    document.getElementById('resPromedio').innerText = promedio.toFixed(2);
}