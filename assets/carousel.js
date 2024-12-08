const wrapper = document.querySelector(".carousel-wrapper");
const prevButton = document.querySelector(".custom-prev");
const nextButton = document.querySelector(".custom-next");
const slides = document.querySelectorAll(".carousel-item");
const dots = document.querySelectorAll(".dot");
const totalSlides = slides.length;

let currentIndex = 0;

// Función para actualizar el carrusel
function updateCarousel() {
const offset = currentIndex * -100; // Desplazamiento basado en el índice
wrapper.style.transform = `translateX(${offset}%)`;

// Actualizar el color de los puntos
dots.forEach(dot => dot.classList.remove('active')); // Eliminar la clase 'active' de todos los puntos
dots[currentIndex].classList.add('active'); // Agregar la clase 'active' al punto correspondiente
}

// Función para navegar a la imagen anterior
prevButton.addEventListener("click", () => {
currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
updateCarousel();
});

// Función para navegar a la imagen siguiente
nextButton.addEventListener("click", () => {
currentIndex = (currentIndex + 1) % totalSlides;
updateCarousel();
});

// Función para navegar directamente a la imagen desde un dot
dots.forEach((dot, index) => {
dot.addEventListener("click", () => {
currentIndex = index;
updateCarousel();
});
});

updateCarousel(); // Inicializa el carrusel