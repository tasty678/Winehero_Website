let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
}

const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange the slides next to one another
slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + "px";
});

let currentSlideIndex = 0;

// Move to the next slide
rightArrow.addEventListener("click", () => {
  if (currentSlideIndex < slides.length - 3) {
    currentSlideIndex++;
    track.style.transform = `translateX(-${slideWidth * currentSlideIndex}px)`;
  }
});

// Move to the previous slide
leftArrow.addEventListener("click", () => {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    track.style.transform = `translateX(-${slideWidth * currentSlideIndex}px)`;
  }
});