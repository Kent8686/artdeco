const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

const imagenes = document.querySelectorAll('.item');

const observador = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src; // Aquí JS carga la imagen real
      img.classList.remove('lazy');
      observador.unobserve(img); // Ya la cargó, deja de vigilarla
    }
  });
});

imagenes.forEach(img => observador.observe(img));

