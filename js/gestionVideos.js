document.addEventListener("DOMContentLoaded", function () {
    const videoForm = document.getElementById("video-form");
    const videoList = document.getElementById("video-list");

    videoForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const codigo = document.getElementById("codigo").value;
        const nombre = document.getElementById("nombre").value;
        const url = document.getElementById("url").value;
        const idiomaOriginal = document.getElementById("idioma-original").value;
        const idiomasDisponibles = document.getElementById("idiomas-disponibles").value;
        const subtitulosDisponibles = document.getElementById("subtitulos-disponibles").value;
        const duracion = document.getElementById("duracion").value;

        const videoItem = document.createElement("li");
        videoItem.innerHTML = `
            Código: ${codigo}<br>
            Nombre: ${nombre}<br>
            URL: <a href="${url}" target="_blank">${nombre}</a><br>
            Idioma Original: ${idiomaOriginal}<br>
            Idiomas Disponibles: ${idiomasDisponibles}<br>
            Subtítulos Disponibles: ${subtitulosDisponibles}<br>
            Duración: ${duracion}
        `;

        videoList.appendChild(videoItem);

        videoForm.reset();
    });
});
