const btn = document.querySelector("#btn");
const msg = document.querySelector("#msg");
console.log(btn);

let clicks = 0;

btn.addEventListener("click", () => {
  console.log("Clickeddd!!!!");

  clicks = clicks + 1;
  msg.textContent = `Clicked ${clicks} times`;
});
