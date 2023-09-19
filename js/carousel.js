let carousel = document.querySelector(".carousel");
let item = document.querySelector(".skill-field");
let left = document.querySelector('button[data-action="left"]');
let right = document.querySelector('button[data-action="right"]');
right.addEventListener("click", function () {
  carousel.scrollLeft += item.clientWidth;
});
left.addEventListener("click", function () {
  carousel.scrollLeft -= item.clientWidth;
});
