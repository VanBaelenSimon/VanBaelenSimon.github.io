const arrowUp = document.getElementById("arrow-up");
const arrowDown = document.getElementById("arrow-down");
arrowUp.addEventListener("click", () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
arrowDown.addEventListener("click", () => {
  window.scrollBy({
    top: window.innerHeight,
    left: 0,
    behavior: "smooth",
  });
});
