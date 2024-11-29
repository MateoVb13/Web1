document.addEventListener("DOMContentLoaded", function () {
    const matriculaForm = document.getElementById("matricula-form");
    const matriculaList = document.getElementById("matricula-list");

    matriculaForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fecha = document.getElementById("fecha").value;
        const tema = document.getElementById("tema").value;
        const estudiante = document.getElementById("estudiante").value;
        const valor = parseFloat(document.getElementById("valor").value);

   
        const matriculaItem = document.createElement("li");
        matriculaItem.innerHTML = `
            Fecha: ${fecha}<br>
            Tema: ${tema}<br>
            Estudiante: ${estudiante}<br>
            Valor: $${valor.toFixed(2)}
        `;


        matriculaList.appendChild(matriculaItem);

        matriculaForm.reset();
    });
});
