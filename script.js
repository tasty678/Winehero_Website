let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
}

let lastScrollY = window.scrollY;
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // 向下滾動，隱藏導航列
    nav.style.transform = "translateY(-100%)";
  } else {
    // 向上滾動，顯示導航列
    nav.style.transform = "translateY(0)";
  }
  lastScrollY = window.scrollY;
});