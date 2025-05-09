// Slider básico
const slides = document.querySelector('.slides');
const slideElems = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let current = 0;
const total = slideElems.length;

function showSlide(i) {
  current = (i + total) % total;
  slides.style.transform = `translateX(-${current * 100}%)`;
}
prevBtn.addEventListener('click', () => showSlide(current - 1));
nextBtn.addEventListener('click', () => showSlide(current + 1));
setInterval(() => showSlide(current + 1), 6000);

// Filtro de cards
const filterSelect = document.getElementById('categoria');
const cards = document.querySelectorAll('.card');
filterSelect.addEventListener('change', () => {
  const cat = filterSelect.value;
  cards.forEach(card => {
    card.style.display = (cat === 'all' || card.dataset.cat === cat)
      ? 'block' : 'none';
  });
});
