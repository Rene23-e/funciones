function edad() {
            let inputEdad = document.getElementById("campoEdad").value;


            let edad = parseInt(inputEdad, 10);


            if (isNaN(edad)) {
                alert("Por favor, ingresa un número válido.");
                return;
            }

            if (edad >= 18) {
                alert("Es mayor de edad");
            } else {
                alert("Es menor de edad");
            }
        }