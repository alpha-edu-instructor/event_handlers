const button = document.querySelector("button");
const ul = document.querySelector("ul");
let i = 1;

button.addEventListener("click", function () {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = `Элемент ${i}`;
  ul.append(li);
  i++;
});