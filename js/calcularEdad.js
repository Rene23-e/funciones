function calcularEdad(){
    let anio = Number(document.getElementById("anioNacimiento").value);

    let edad = new Date().getFullYear() - anio;

    document.getElementById("resEdad").innerHTML =
        "Edad: " + edad + " años";
}