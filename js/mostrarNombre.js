function mostrarNombre() {
    let nombre = document.getElementById('nomFormat').value;
    if (nombre.trim() !== '') {
        document.getElementById('resMostrarNombre').innerText = `Nombre registrado: ${nombre}`;
    } else {
        document.getElementById('resMostrarNombre').innerText = 'Por favor ingresa un nombre';
    }
}