const arrowUp = document.getElementById("arrow-up");
const arrowDown = document.getElementById("arrow-down");
const secondPage = document.getElementById("about");
const firstPage = document.getElementById("homepage");
arrowUp.addEventListener("click", () => {
  // window.scroll({
  //   top: 0,
  //   left: 0,
  //   behavior: "smooth",
  // });
  firstPage.scrollIntoView({
    behavior: "smooth",
  });
});
arrowDown.addEventListener("click", () => {
  // window.scroll({
  //   top: secondPage,
  //   left: 0,
  //   behavior: "smooth",
  // });
  secondPage.scrollIntoView({
    behavior: "smooth",
  });
});
