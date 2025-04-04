let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
}

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


const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let currentSlideIndex = 0;

// 計算每個產品的寬度
function updateSlideWidth() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + "px";
  });
  return slideWidth;
}

let slideWidth = updateSlideWidth();

// 計算每次滑動的產品數量
function getVisibleSlides() {
  const viewportWidth = window.innerWidth;
  return viewportWidth <= 768 ? 2 : 3; // 小螢幕顯示 2 個，大螢幕顯示 3 個
}

// 監聽視窗大小變化，重新計算寬度
window.addEventListener("resize", () => {
  slideWidth = updateSlideWidth();
});

// 向右滑動
rightArrow.addEventListener("click", () => {
  const visibleSlides = getVisibleSlides();
  if (currentSlideIndex < slides.length - visibleSlides) {
    currentSlideIndex++;
    track.style.transform = `translateX(-${slideWidth * currentSlideIndex}px)`;
  }
});

// 向左滑動
leftArrow.addEventListener("click", () => {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    track.style.transform = `translateX(-${slideWidth * currentSlideIndex}px)`;
  }
});

