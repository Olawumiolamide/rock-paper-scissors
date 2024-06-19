//to prevent the animation on loading
setTimeout(() => {
    document.boby.classList.remove("loading");
}, 500);

// DOM ELEMENTS
const btnRules = document.querySelector(".game-rules");
const btnClose = document.querySelector(".close-button");
const modalRules = document.querySelector(".modal");

//To make rules show or hide
btnRules.addEventListener("click", () => {
    modalRules.classList.toggle("show-modal");
  });
  btnClose.addEventListener("click", () => {
    modalRules.classList.toggle("show-modal");
  });