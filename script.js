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

// 這段程式用於產品區塊的 h2 標題
document.addEventListener("DOMContentLoaded", () => {
  const productsHeading = document.querySelector(".products-container h2");

  // 建立 Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 當 h2 進入視窗時，增加字體大小
          productsHeading.style.transition = "font-size 0.4s ease";
          productsHeading.style.fontSize = "1.5rem"; // 放大字體
        } else {
          // 當 h2 離開視窗時，恢復原本字體大小
          productsHeading.style.fontSize = "0.8rem"; // 恢復字體大小
        }
      });
    },
    {
      threshold: 0.5, // 當 h2 有 50% 可見時觸發
    }
  );

  // 觀察 h2 元素
  observer.observe(productsHeading);
});

// 這段程式用於 Product-container 內的 carousel
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


document.addEventListener("DOMContentLoaded", () => {
  const quoteContainer = document.querySelector(".quote-container");
  const leftQuote = document.querySelector(".left-quote");
  const rightQuote = document.querySelector(".right-quote");
  const quoteText = document.querySelector(".quote-container p");

  // 建立 Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 當進入視窗時，添加動畫類名
          leftQuote.classList.add("swing-left");
          rightQuote.classList.add("swing-right");
          quoteText.classList.add("text-grow");
        } else {
          // 當離開視窗時，移除動畫類名
          leftQuote.classList.remove("swing-left");
          rightQuote.classList.remove("swing-right");
          quoteText.classList.remove("text-grow");
        }
      });
    },
    {
      threshold: 0.5, // 當區塊有 50% 可見時觸發
    }
  );

  // 觀察 quote-container
  observer.observe(quoteContainer);
});

document.addEventListener("DOMContentLoaded", () => {
  const newsSection = document.querySelector(".news-container");
  const newsHeading = document.querySelector(".news-text-container h2");
  const newsImage = document.querySelector(".news-photo");

  // 建立 Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 當進入視窗時，添加動畫類名
          newsHeading.classList.add("heading-grow");
          newsImage.classList.add("image-visible");
        } else {
          // 當離開視窗時，移除動畫類名
          newsHeading.classList.remove("heading-grow");
          newsImage.classList.remove("image-visible");
        }
      });
    },
    {
      threshold: 0.5, // 當區塊有 50% 可見時觸發
    }
  );

  // 觀察 news-container
  observer.observe(newsSection);
});

  