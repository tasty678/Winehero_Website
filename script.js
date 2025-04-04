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

document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(document.querySelectorAll(".carousel-slide"));
  const prevButton = document.querySelector(".left-arrow");
  const nextButton = document.querySelector(".right-arrow");
  
  let slideWidth = slides[0].offsetWidth + 10; // 10px 是 gap
  let currentIndex = 0;
  let maxIndex = slides.length - 1;
  
  nextButton.addEventListener("click", function () {
    if (currentIndex < maxIndex) {
      currentIndex++;
      track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }
  });

  prevButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }
  });

  // 確保在視窗大小改變時，重新計算圖片寬度
  window.addEventListener("resize", function () {
    slideWidth = slides[0].offsetWidth + 10;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  });
});