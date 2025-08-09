// Efecto de mensaje en formulario
document.getElementById("form-contacto").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Gracias por tu mensaje, te responderé pronto 😃");
});

// Animación al hacer scroll
window.addEventListener("scroll", () => {
    document.querySelectorAll(".section").forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }
    });
});

// Inicializa opacidad para animación
document.querySelectorAll(".section").forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(50px)";
    sec.style.transition = "all 0.6s ease-out";
});
