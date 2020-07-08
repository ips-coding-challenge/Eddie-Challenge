if (module.hot) {
  module.hot.accept();
}

const S = (el) => document.querySelector(el);

let menuOpen = false;
const menu = S(".nav-menu");
const main = S(".main");
const toggle = S(".nav-toggle");
let items = document.querySelectorAll(".nav-item");
const nav = S("nav");

toggle.addEventListener("click", (e) => {
  e.preventDefault();
  menuOpen = !menuOpen;

  menu.classList.toggle("open");
  document.body.classList.toggle("hidden");
  main.classList.toggle("hidden");

  animateMenu();
});

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    console.log(`Link clicked`);
    menuOpen = !menuOpen;
    menu.classList.remove("open");
    document.body.classList.remove("hidden");
    main.classList.remove("hidden");
  });
});

function animateMenu() {
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
