function saludar() {
    let nombre = document.getElementById('nombreInput').value;
    if (nombre.trim() !== '') {
        document.getElementById('resSaludo').innerText = `¡Hola, ${nombre}! Bienvenido/a.`;
    } else {
        document.getElementById('resSaludo').innerText = '¡Hola! Por favor ingresa tu nombre.';
    }
}