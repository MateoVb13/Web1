function registrar() {
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    var apellidos = document.getElementById("apellidos").value;
    var tipoId = document.getElementById("tipoId").value;
    var numId = document.getElementById("numId").value;
    var direccion = document.getElementById("direccion").value;
    var fechaNacimiento = document.getElementById("FechaNacimiento").value;
    var estudios = document.getElementById("estudios").value;
    var email = document.getElementById("email").value;

    var nuevoUsuario = {
        usuario: usuario,
        password: password,
        apellidos: apellidos,
        tipoId: tipoId,
        numId: numId,
        direccion: direccion,
        fechaNacimiento: fechaNacimiento,
        estudios: estudios,
        email: email
    };


    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push(nuevoUsuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Usuario registrado con éxito.");

    // Verifica si el registro fue exitoso y redirige
    if (registroExitoso()) {
        // Redirige a la página deseada (reemplaza 'nueva_pagina.html' con la URL de tu página)
        window.location.href = "inicioSesion.html";
    }
}

function registroExitoso() {
    // Agrega lógica de verificación adicional aquí si es necesario
    return true; // Cambia esto según tus necesidades de verificación
}
