function iniciarSesion() {
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;

    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Usuario predeterminado con rol "Administrador"
    var usuarioAdministrador = {
        usuario: "admin",
        password: "admin123",
        rol: "Administrador"
    };

    // Agregar el usuario predeterminado solo si no existe ya en la lista
    var usuarioExistente = usuarios.find(function (user) {
        return user.usuario === usuarioAdministrador.usuario;
    });

    if (!usuarioExistente) {
        usuarios.push(usuarioAdministrador);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }

    // Verificar las credenciales del usuario ingresado
    var encontrado = usuarios.some(function (user) {
        return user.usuario === usuario && user.password === password;
    });

    if (encontrado) {
        var rolUsuario = usuarios.find(function (user) {
            return user.usuario === usuario;
        }).rol;

        // Redirigir a la página correspondiente según el rol del usuario
        if (rolUsuario === "Profesor") {
            window.location.href = "sistemaAcademicoProfesores.html";
        } else if (rolUsuario === "Administrador") {
            window.location.href = "panelAdministradores.html";
        } else {
            window.location.href = "sistemaAcademicoEstudiantes.html";
        }
    } else {
        alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
}
