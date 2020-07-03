if (module.hot) {
  module.hot.accept();
}

const S = (el) => document.querySelector(el);

let menuOpen = false;
const toggle = S(".nav-toggle");

toggle.addEventListener("click", (e) => {
  e.preventDefault();
  menuOpen = !menuOpen;
  const menu = S(".nav-menu");
  const main = S(".main");
  menu.classList.toggle("open");
  document.body.classList.toggle("hidden");
  main.classList.toggle("hidden");

  animateMenu();
});

function animateMenu() {
  let items = document.querySelectorAll(".nav-item");
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
