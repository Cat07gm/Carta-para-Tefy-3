function mostrarSorpresa() {
    const texto = document.getElementById("sorpresa");
    texto.classList.toggle("oculto");
}

/* Crear corazones animados */
setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤";

    const container = document.querySelector(".hearts-container");
    const size = Math.random() * 20 + 10; // 10px–30px
    const pos = Math.random() * 100; // posición en pantalla
    const dur = Math.random() * 3 + 2; // 2–5 segundos

    heart.style.left = pos + "vw";
    heart.style.fontSize = size + "px";
    heart.style.animationDuration = dur + "s";

    container.appendChild(heart);

    // eliminar corazón después de animarse
    setTimeout(() => {
        heart.remove();
    }, dur * 1000);
}, 500);
