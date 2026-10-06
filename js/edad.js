function verificarEdad() {
    let edad = parseInt(document.getElementById('edadInput').value) || 0;
    if (edad >= 18) {
        document.getElementById('resEdad').innerText = 'Eres mayor de edad';
    } else {
        document.getElementById('resEdad').innerText = 'Eres menor de edad';
    }
}