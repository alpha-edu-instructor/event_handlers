const modal = document.querySelector(".modal");
const openButton = document.querySelector("#open");
const closeButton = document.querySelector("#close");

openButton.addEventListener("click", function () {
  modal.classList.remove("hide");
});

closeButton.addEventListener("click", function () {
  modal.classList.add("hide");
});

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.classList.add("hide");
  }
});