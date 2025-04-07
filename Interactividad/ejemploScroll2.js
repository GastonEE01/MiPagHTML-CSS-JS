document.addEventListener("DOMContentLoaded", function () {
    const cajas = document.querySelectorAll(".caja");

    function mostrarCajas() {
        cajas.forEach(caja => {
            const rect = caja.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                caja.classList.add("mostrar");
            }
        });
    }

    window.addEventListener("scroll", mostrarCajas);
    mostrarCajas(); // Para revisar si hay elementos visibles al cargar
});
