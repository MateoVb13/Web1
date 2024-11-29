document.addEventListener("DOMContentLoaded", function () {
    // ... Tu código existente ...

    const busquedaInput = document.querySelector(".busqueda-section input");
    const cursos = document.querySelectorAll(".curso");

    document.querySelector(".busqueda-section button").addEventListener("click", function () {
        const terminoBusqueda = busquedaInput.value.toLowerCase();

        cursos.forEach(function (curso) {
            const nombreCurso = curso.getAttribute("data-nombre").toLowerCase();

            if (nombreCurso.includes(terminoBusqueda) || terminoBusqueda === "") {
                curso.style.display = "block";
            } else {
                curso.style.display = "none";
            }
        });
    });
});
