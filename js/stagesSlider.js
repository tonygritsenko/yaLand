//move elements
window.addEventListener("resize", moveElement);

function moveElement() {
  const windowWidth = window.innerWidth;

  const num2 = document.querySelector("#num2");
  const num4 = document.querySelector("#num4");

  const slide1 = document.querySelector("#slide1");
  const slide2 = document.querySelector("#slide2");

  if (windowWidth < 1241) {
    slide1.append(num2);
    slide2.prepend(num4);
  } else {
    slide1.append(num4);
    slide2.prepend(num2);
  }
}

moveElement();

// slider
const carouselContainer = document.querySelector(".stages__slides");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.querySelector(".stages__slider-dots");
const posts = document.querySelectorAll(".stages__slide");

let currentIndex = 0;

function updateCarousel() {
  carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

  const activeDot = dotsContainer.querySelector(".active-dot");
  if (activeDot) {
    activeDot.classList.remove("active-dot");
  }
  dotsContainer.children[currentIndex].classList.add("active-dot");
}

function moveToNext() {
  currentIndex = (currentIndex + 1) % posts.length;
  updateCarousel();

  prevBtn.disabled = false;
  nextBtn.disabled = currentIndex === posts.length - 1;
}

function moveToPrev() {
  currentIndex = (currentIndex - 1 + posts.length) % posts.length;
  updateCarousel();

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = false;
}

function createDots() {
  for (let i = 0; i < posts.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("stages__slider-dot");
    if (i === currentIndex) {
      dot.classList.add("active-dot");
    }
    dot.addEventListener("click", () => {
      currentIndex = i;
      updateCarousel();
    });
    dotsContainer.appendChild(dot);
  }
}

nextBtn.addEventListener("click", moveToNext);
prevBtn.addEventListener("click", moveToPrev);
createDots();
