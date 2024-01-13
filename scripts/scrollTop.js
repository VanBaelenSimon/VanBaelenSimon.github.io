const arrowUp = document.getElementById("arrow-up");
const arrowDown = document.getElementById("arrow-down");
const secondPage = document.getElementById("about");
const firstPage = document.getElementById("homepage");
arrowUp.addEventListener("click", () => {
  firstPage.scrollIntoView({
    behavior: "smooth",
  });
});
arrowDown.addEventListener("click", () => {
  secondPage.scrollIntoView({
    behavior: "smooth",
  });
});
