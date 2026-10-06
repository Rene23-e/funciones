function obtenerEdad() {
    let anioNac = parseInt(document.getElementById('anioNac').value) || 0;
    let anioActual = new Date().getFullYear();
    if (anioNac > 0 && anioNac <= anioActual) {
        let edad = anioActual - anioNac;
        document.getElementById('resCalcularEdad').innerText = edad + ' años';
    } else {
        document.getElementById('resCalcularEdad').innerText = 'Año no válido';
    }
}