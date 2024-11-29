document.addEventListener("DOMContentLoaded", function () {
    const cursoForm = document.getElementById("curso-form");
    const cursoList = document.getElementById("curso-list");

    cursoForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const codigo = document.getElementById("codigo").value;
        const nombre = document.getElementById("nombre").value;
        const videosAsociados = document.getElementById("videos-asociados").value.split(',').map(video => video.trim());


        const cursoItem = document.createElement("li");
        cursoItem.innerHTML = `
            Código: ${codigo}<br>
            Nombre: ${nombre}<br>
            Videos Asociados: ${videosAsociados.join(', ')}
        `;

        cursoList.appendChild(cursoItem);

        cursoForm.reset();
    });
});
