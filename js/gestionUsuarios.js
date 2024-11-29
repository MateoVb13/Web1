function registrar() {
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    var tipoUsuario = document.getElementById("tipoUsuario").value;

    // Asignamos roles distintos según el tipo de usuario
    var rol = (tipoUsuario === "Profesor") ? "Profesor" : "Estudiante";

    var nuevoUsuario = { usuario: usuario, password: password, rol: rol };

    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push(nuevoUsuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Usuario registrado con éxito.");
}

// Otras funciones y lógica según sea necesario
