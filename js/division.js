function dividir() {
    let n1 = parseFloat(document.getElementById('div1').value) || 0;
    let n2 = parseFloat(document.getElementById('div2').value) || 0;
    
    if (n2 === 0) {
        document.getElementById('resDiv').innerText = 'No se puede dividir entre 0';
    } else {
        document.getElementById('resDiv').innerText = (n1 / n2).toFixed(2);
    }
}