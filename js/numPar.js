function evaluarPar() {
    let num = parseInt(document.getElementById('numParInput').value) || 0;
    if (num % 2 === 0) {
        document.getElementById('resPar').innerText = 'El número es PAR';
    } else {
        document.getElementById('resPar').innerText = 'El número es IMPAR';
    }
}