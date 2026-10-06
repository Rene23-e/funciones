function calcularAreaCirculo() {
    let radio = parseFloat(document.getElementById('radio').value) || 0;
    let area = Math.PI * Math.pow(radio, 2);
    document.getElementById('resCirculo').innerText = area.toFixed(2);
}