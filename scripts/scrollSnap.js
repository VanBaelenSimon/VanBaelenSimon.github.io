document.addEventListener("wheel", function (event) {
  event.preventDefault();
  const scrollAmount = event.deltaY;
  const windowHeight = window.innerHeight;
  let scrollMultiplier;
  if (scrollAmount > 0) {
    scrollMultiplier = 1;
  } else {
    scrollMultiplier = -1;
  }
  const scrollDistance = windowHeight * scrollMultiplier;
  window.scrollBy({
    top: scrollDistance,
    left: 0,
    behavior: "smooth",
  });
});
