// slider
const container = document.querySelector('.players__carousel');
const slides = document.querySelectorAll('.players__slide');
const prev = document.querySelector('.players__prev');
const next = document.querySelector('.players__next');
const slideNumber = document.querySelector('.players__number');
const totalSlides = document.querySelector('.players__total');

const containerWidth = container.offsetWidth;
const slideWidth = (containerWidth / 6 / containerWidth) * 100;

let currentI = 0;

function showSlide(index) {
  if (index < 0 || index >= slides.length) return;

  container.style.transform = `translateX(-${index * slideWidth}%)`;
  currentI = index;

  slideNumber.textContent = index + 1;

  if (index + 1 === 6) {
    totalSlides.style.opacity = 1;
  } else {
    totalSlides.style.opacity = 0.6;
  }
}

const interval = 4000;

function autoplay() {
  setInterval(() => {
    const nextIndex = (currentI + 1) % slides.length;
    showSlide(nextIndex);
  }, interval);
}

prev.addEventListener('click', () => {
  const prevIndex = (currentI - 1 + slides.length) % slides.length;
  showSlide(prevIndex);
});

next.addEventListener('click', () => {
  const nextIndex = (currentI + 1) % slides.length;
  showSlide(nextIndex);
});

showSlide(currentI);
autoplay();

totalSlides.textContent = slides.length;

//move element
window.addEventListener("resize", moveElement);

function moveElement() {
  const windowW = window.innerWidth;

  const control = document.querySelector(".players__control");
  const playersC = document.querySelector(".players__container");
  const playersTop = document.querySelector(".players__top");

  if (windowW < 721) {
    playersC.append(control);
  } else {
    playersTop.append(control);
  }
}
