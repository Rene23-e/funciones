function validarContrasena() {
    let pass = document.getElementById('passInput').value;
    let passCorrecta = "Renee";
    
    if (pass === passCorrecta) {
        document.getElementById('resPass').innerText = 'Acceso concedido';
    } else {
        document.getElementById('resPass').innerText = 'Contraseña incorrecta';
    }
}