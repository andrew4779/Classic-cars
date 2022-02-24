const menu = document.querySelector(".menu");
const targets = document.querySelectorAll(".target");
const wrappers = document.querySelectorAll(".wrapper");

menu.addEventListener("click", function() {
  targets.forEach(function(item) {
    item.classList.toggle("change");
  });
});

wrappers.forEach((wrapper) => {
  wrapper.addEventListener("click", function() {
    targets.forEach(function(item) {
      item.classList.remove("change");
    });
  });
});