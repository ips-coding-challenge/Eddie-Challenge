if (module.hot) {
  module.hot.accept();
}

let menuOpen = false;
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", (e) => {
  e.preventDefault();
  menuOpen = !menuOpen;
  const menu = document.querySelector(".menu");
  const main = document.querySelector(".main");
  menu.classList.toggle("open");
  document.body.classList.toggle("hidden");
  main.classList.toggle("hidden");

  animateMenu();
});

function animateMenu() {
  let items = document.querySelectorAll(".menu li");
  console.log(`items`, items);

  if (menuOpen) {
    items.forEach((item, i) => {
      item.classList.add("translate");
      item.style.transitionDelay = `${i * 50}ms`;
    });
  } else {
    items.forEach((item) => {
      item.classList.remove("translate");
    });
  }
}
