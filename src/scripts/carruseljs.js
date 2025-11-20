let currentIndex = 0;
const track = document.getElementById('carousel-track');
const slides = track.children;
const totalSlides = slides.length;

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
});

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}