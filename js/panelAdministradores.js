function mostrarContenido(id) {
    // Oculta todos los elementos con clase "gestion-section"
    var secciones = document.querySelectorAll('.gestion-section');
    secciones.forEach(function(seccion) {
        seccion.style.display = 'none';
    });

    // Muestra el elemento específico con el ID proporcionado
    var seccionEspecifica = document.getElementById(id);
    if (seccionEspecifica) {
        seccionEspecifica.style.display = 'block';
    }
}
