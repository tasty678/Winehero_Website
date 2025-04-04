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

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  const headerHeight = document.querySelector(".logo-container").offsetHeight;

  console.log("Scroll position:", window.scrollY); // 檢查滾動位置
  console.log("Header height:", headerHeight); // 檢查 logo-container 高度

  if (window.scrollY > headerHeight) {
    // 當滾動超過 logo-container 的高度時，固定 menu
    nav.style.position = "fixed";
    nav.style.top = "0";
    nav.style.width = "100%";
    nav.style.zIndex = "1000"; // 確保 menu 顯示在最上層
  } else {
    // 滾動回到頂部時，恢復原始位置
    nav.style.position = "relative";
  }
});

// Move to the previous slide
leftArrow.addEventListener("click", () => {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    track.style.transform = `translateX(-${slideWidth * currentSlideIndex}px)`;
  }
});

