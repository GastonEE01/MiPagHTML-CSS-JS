const bloques = document.querySelectorAll(".bloque");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.5 }); // El 50% del bloque debe estar visible

bloques.forEach(bloque => observer.observe(bloque));
