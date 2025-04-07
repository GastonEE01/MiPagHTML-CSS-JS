function mostrarSeccion(id) {
    // Ocultar todas las secciones
    let secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => seccion.classList.add('oculto'));

    // Mostrar solo la sección seleccionada
    let seccionActiva = document.getElementById(id);
    seccionActiva.classList.remove('oculto');
}