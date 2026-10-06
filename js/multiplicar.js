function multiplicar() {
    let n1 = parseFloat(document.getElementById('mult1').value) || 0;
    let n2 = parseFloat(document.getElementById('mult2').value) || 0;
    let total = n1 * n2;
    document.getElementById('resMult').innerText = total;
}