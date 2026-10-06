function sumar() {
    let n1 = parseFloat(document.getElementById('num1').value) || 0;
    let n2 = parseFloat(document.getElementById('num2').value) || 0;
    let total = n1 + n2;
    
    document.getElementById('resSuma').innerText = total;
    
    // Registrearje yn de skiednis
    agregarRegistro('histSuma', `${n1} + ${n2} = ${total}`);
}