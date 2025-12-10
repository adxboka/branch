const btn = document.querySelector("#btn");
const p = document.querySelector("p");

btn.addEventListener("click", () => {
  console.log("hey");

  p.style.backgroundColor = "black";
  p.style.color = "white";
});

console.log(btn);
