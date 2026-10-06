function mostrarHora() {
    let ahora = new Date();
    let horaFormateada = ahora.toLocaleTimeString();
    document.getElementById('resHora').innerText = horaFormateada;
}