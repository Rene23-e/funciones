function calcularAreaRectangulo() {
    let base = parseFloat(document.getElementById('base').value) || 0;
    let altura = parseFloat(document.getElementById('altura').value) || 0;
    let area = base * altura;
    document.getElementById('resRectangulo').innerText = area;
}