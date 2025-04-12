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
          productsHeading.style.transition = "font-size 0.8s ease";
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

// 這段程式用於 quote-container 內的動畫
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

// 這段程式用於 news-container 內的圖片和 h2 標題
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

// 這段程式用於服務區塊的 h2 標題
document.addEventListener("DOMContentLoaded", () => {
  const productsHeading = document.querySelector(".services-container h2");

  // 建立 Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 當 h2 進入視窗時，增加字體大小
          productsHeading.style.transition = "font-size 0.8s ease";
          productsHeading.style.fontSize = "1.8rem"; // 放大字體
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

// 這段程式用於poster button
document.addEventListener("DOMContentLoaded", () => {
  const scrollToHistoryButton = document.getElementById("scroll-to-history");
  const historyContainer = document.getElementById("hb_history");

  scrollToHistoryButton.addEventListener("click", () => {
    // 平滑滾動到 history-container
    const navHeight = document.querySelector("nav").offsetHeight; // 獲取 nav 的高度
    const targetPosition = historyContainer.getBoundingClientRect().top + window.scrollY - navHeight - 30; // 偏移 10px

     // 平滑滾動到目標位置
     window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});

// 這段程式用於產品區塊的進度條
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".product");
  const productList = document.querySelectorAll(".product-list li");
  const progressBar = document.querySelector(".progress-bar");

  function updateActiveSection() {
      let index = 0;
      sections.forEach((section, i) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5) {
              index = i;
          }
      });

      // 更新進度條
      let progress = ((index + 1) / sections.length) * 100;
      progressBar.style.height = `${progress}%`;

      // 更新左下角產品名稱顏色
      productList.forEach(li => li.classList.remove("active"));
      productList[index].classList.add("active");
  }

  function revealSections() {
      sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.75) {
              section.classList.add("visible");
          }
      });
  }

  window.addEventListener("scroll", () => {
      updateActiveSection();
      revealSections();
  });

  revealSections();
});

document.addEventListener("scroll", function () {
  const sidebar = document.querySelector(".sidebar");
  const introContainer = document.querySelector(".hb-introduction-container");

  // 獲取 hb-introduction-container 的位置
  const introTop = introContainer.getBoundingClientRect().top;
  const introBottom = introContainer.getBoundingClientRect().bottom;

  // 設置觸發點為視窗高度的 20%
  const triggerPoint = window.innerHeight * 0.7;

  // 獲取頁面底部的距離
  const pageBottomTrigger = document.documentElement.scrollHeight - window.innerHeight * 1.4;

  // 當 hb-introduction-container 出現在視窗內時顯示 sidebar
  if (
    introTop <= window.innerHeight - triggerPoint &&
    introBottom >= 0 &&
    window.scrollY < pageBottomTrigger
  ) {
    sidebar.classList.add("visible");
  } else {
    sidebar.classList.remove("visible");
  }
});

// 這段程式用於產品區塊的排序功能
document.addEventListener("DOMContentLoaded", () => {
  const sortButton = document.querySelector(".sort-button"); // 選取排序按鈕
  const sortOptions = document.querySelector(".sort-options"); // 選取排序選項

  // 點擊 sort-button 時切換 sort-options 的顯示狀態
  sortButton.addEventListener("click", (event) => {
    event.stopPropagation(); // 防止點擊事件冒泡

    if (sortOptions.style.maxHeight) {
      // 如果已展開，則收回
      sortOptions.style.maxHeight = null;
    } else {
      // 如果是收起狀態，則展開
      sortOptions.style.maxHeight = sortOptions.scrollHeight + "px";
    }
  });

  // 點擊頁面其他地方時隱藏 sort-options
  document.addEventListener("click", (event) => {
    if (!sortOptions.contains(event.target) && !sortButton.contains(event.target)) {
      sortOptions.style.maxHeight = null; // 收回
    }
  });
});
// 這段程式用於產品區塊的篩選功能
document.addEventListener("DOMContentLoaded", () => {
  const filterGroups = document.querySelectorAll(".filter-group");

  filterGroups.forEach((group) => {
    const title = group.querySelector(".filter-group-title");
    const options = group.querySelector(".filter-options");

    // 點擊 filter-group-title 時切換 filter-options 的顯示狀態
    title.addEventListener("click", () => {
      const isActive = options.classList.contains("active");

      // 關閉所有其他的 filter-options
      filterGroups.forEach((otherGroup) => {
        const otherOptions = otherGroup.querySelector(".filter-options");
        if (otherOptions !== options) {
          otherOptions.classList.remove("active");
          otherOptions.style.maxHeight = null; // 重置高度
        }
      });

      // 切換當前的 filter-options
      if (isActive) {
        options.classList.remove("active");
        options.style.maxHeight = null; // 收起
      } else {
        options.classList.add("active");
        options.style.maxHeight = options.scrollHeight + "px"; // 展開
      }
    });
  });
});