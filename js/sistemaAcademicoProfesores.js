document.addEventListener("DOMContentLoaded", function () {
    // Datos simulados (puedes reemplazarlos con datos reales)
    const cursos = ["Curso de Diseño Web", "Curso de Programación en Python", "Curso de Marketing Digital", "Curso de Ciencia de Datos"];
    const estudiantes = ["Juan Perez", "Maria Rodriguez", "Carlos Gomez", "Abrahan Badel", "Juan Morales", "Mateo Villalobos"];

    // Elementos del DOM
    const listaCursos = document.getElementById("lista-cursos");
    const selectCurso = document.getElementById("select-curso");
    const selectEstudiante = document.getElementById("select-estudiante");
    const btnAsignar = document.getElementById("btn-asignar");
    const selectCursoCalificacion = document.getElementById("select-curso-calificacion");
    const selectEstudianteCalificacion = document.getElementById("select-estudiante-calificacion");
    const inputCalificacion = document.getElementById("input-calificacion");
    const btnIngresarCalificacion = document.getElementById("btn-ingresar-calificacion");
    const selectEstudianteProgreso = document.getElementById("select-estudiante-progreso");
    const progresoEstudiante = document.getElementById("progreso-estudiante");

    // Llenar lista de cursos
    cursos.forEach(curso => {
        const listItem = document.createElement("li");
        listItem.textContent = curso;
        listaCursos.appendChild(listItem);

        // Llenar select de cursos para asignar estudiantes
        const optionCurso = document.createElement("option");
        optionCurso.textContent = curso;
        optionCurso.value = curso;
        selectCurso.appendChild(optionCurso);

        // Llenar select de cursos para ingresar calificaciones
        const optionCursoCalificacion = document.createElement("option");
        optionCursoCalificacion.textContent = curso;
        optionCursoCalificacion.value = curso;
        selectCursoCalificacion.appendChild(optionCursoCalificacion);
    });

    // Llenar select de estudiantes para asignar y calificar
    estudiantes.forEach(estudiante => {
        const optionEstudiante = document.createElement("option");
        optionEstudiante.textContent = estudiante;
        optionEstudiante.value = estudiante;

        // Llenar select de estudiantes para asignar
        selectEstudiante.appendChild(optionEstudiante);

        // Llenar select de estudiantes para calificar
        selectEstudianteCalificacion.appendChild(optionEstudiante);

        // Llenar select de estudiantes para ver progreso
        const optionEstudianteProgreso = document.createElement("option");
        optionEstudianteProgreso.textContent = estudiante;
        optionEstudianteProgreso.value = estudiante;
        selectEstudianteProgreso.appendChild(optionEstudianteProgreso);
    });

    // Evento para asignar estudiante a curso
    btnAsignar.addEventListener("click", function () {
        const cursoSeleccionado = selectCurso.value;
        const estudianteSeleccionado = selectEstudiante.value;

        // Implementa lógica para asignar estudiante al curso
        console.log(`Asignar ${estudianteSeleccionado} al curso ${cursoSeleccionado}`);
    });

    // Evento para ingresar calificación
    btnIngresarCalificacion.addEventListener("click", function () {
        const cursoCalificacion = selectCursoCalificacion.value;
        const estudianteCalificacion = selectEstudianteCalificacion.value;
        const calificacion = parseFloat(inputCalificacion.value);

        // Implementa lógica para ingresar calificación
        console.log(`Ingresar calificación ${calificacion} para ${estudianteCalificacion} en el curso ${cursoCalificacion}`);
    });

    // Evento para mostrar progreso del estudiante
    selectEstudianteProgreso.addEventListener("change", function () {
        const estudianteSeleccionado = selectEstudianteProgreso.value;

        // Implementa lógica para mostrar progreso del estudiante
        const progreso = obtenerProgresoEstudiante(estudianteSeleccionado);
        progresoEstudiante.textContent = `Progreso: ${progreso}%`;
    });

    // Función simulada para obtener el progreso del estudiante (puedes reemplazarla con datos reales)
    function obtenerProgresoEstudiante(estudiante) {
        // Lógica para obtener el progreso (porcentaje)
        // Aquí podrías calcular el promedio de las calificaciones, por ejemplo
        return Math.floor(Math.random() * 100);
    }
});
