function evaluarNumMayor() {
    let n1 = parseFloat(document.getElementById('mayor1').value) || 0;
    let n2 = parseFloat(document.getElementById('mayor2').value) || 0;
    
    if (n1 > n2) {
        document.getElementById('resMayor').innerText = `El mayor es ${n1}`;
    } else if (n2 > n1) {
        document.getElementById('resMayor').innerText = `El mayor es ${n2}`;
    } else {
        document.getElementById('resMayor').innerText = 'Ambos números son iguales';
    }
}