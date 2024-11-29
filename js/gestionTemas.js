

document.addEventListener('DOMContentLoaded', function () {
    const temasList = document.getElementById('temas-list');
    const agregarTemaForm = document.getElementById('agregar-tema-form');


    function agregarTema() {
        const codigo = document.getElementById('codigo').value;
        const nombre = document.getElementById('nombre').value;
        const descripcion = document.getElementById('descripcion').value;
        const cursos = document.getElementById('cursos').value;
        const costo = parseFloat(document.getElementById('costo').value);
        const precio = parseFloat(document.getElementById('precio').value);

        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${codigo}</td>
            <td>${nombre}</td>
            <td>${descripcion}</td>
            <td>${cursos}</td>
            <td>${costo}</td>
            <td>${precio}</td>
            <td><button class="btn-borrar">Borrar</button></td>
        `;

        temasList.appendChild(fila);

        agregarTemaForm.reset();

        const botonBorrar = fila.querySelector('.btn-borrar');
        botonBorrar.addEventListener('click', function () {
            temasList.removeChild(fila);
        });
    }

    agregarTemaForm.addEventListener('submit', function (event) {
        event.preventDefault();
        agregarTema();
    });
});
