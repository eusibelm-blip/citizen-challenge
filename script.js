function irASeccion(id) {
    const seccion = document.getElementById(id);

    if (seccion) {
        seccion.scrollIntoView({
            behavior: "smooth"
        });
    }
}

function completarReto(nombre) {
    const resultado = document.getElementById("resultado-" + nombre);

    if (!resultado) {
        return;
    }

    resultado.innerHTML =
        "✅ ¡Reto completado! Reflexiona sobre lo que aprendiste y continúa con el siguiente challenge.";

    let retosCompletados = JSON.parse(
        localStorage.getItem("retosCompletados")
    ) || [];

    if (!retosCompletados.includes(nombre)) {
        retosCompletados.push(nombre);
    }

    localStorage.setItem(
        "retosCompletados",
        JSON.stringify(retosCompletados)
    );
  actualizarProgreso();
}

function actualizarProgreso() {
    const retosCompletados = JSON.parse(
        localStorage.getItem("retosCompletados")
    ) || [];

    const cantidad = retosCompletados.length;
    const porcentaje = (cantidad / 5) * 100;

    const barra = document.getElementById("barraProgreso");
    const texto = document.getElementById("textoProgreso");
    const mensaje = document.getElementById("mensajeFinal");

    if (barra) {
        barra.style.width = porcentaje + "%";
    }

    if (texto) {
        texto.innerHTML = cantidad + " de 5 retos completados";
    }

    if (mensaje && cantidad === 5) {
        mensaje.innerHTML =
            "🏆 ¡FELICIDADES! Has completado todos los Citizen Challenges.";
    }
}

const botonEncuesta = document.getElementById("enviarEncuesta");

if (botonEncuesta) {
    botonEncuesta.addEventListener("click", function () {
        const pregunta1 = document.querySelector(
            'input[name="pregunta1"]:checked'
        );

        const pregunta2 = document.querySelector(
            'input[name="pregunta2"]:checked'
        );

        const pregunta3 = document.querySelector(
            'input[name="pregunta3"]:checked'
        );

        const pregunta4 = document.querySelector(
            'input[name="pregunta4"]:checked'
        );

        const opinion = document.getElementById("opinion").value.trim();

        const mensaje = document.getElementById("mensajeEncuesta");

        if (
            !pregunta1 ||
            !pregunta2 ||
            !pregunta3 ||
            !pregunta4 ||
            opinion === ""
        ) {
            mensaje.innerHTML =
                "⚠️ Completa todas las preguntas antes de enviar la encuesta.";

            return;
        }

        mensaje.innerHTML =
            "✅ ¡Encuesta completada! Gracias por participar en Citizen Challenge.";
    });
}

actualizarProgreso();