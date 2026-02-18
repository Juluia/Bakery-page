// === Елементи ===
const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");
const menuLinks = document.querySelectorAll(".mobile-menu a");

// === Відкрити меню ===
function openMenu() {
  mobileMenu.classList.add("is-open");
  document.body.classList.add("is-scroll-disabled");
}

// === Закрити меню ===
function closeMenu() {
  mobileMenu.classList.remove("is-open");
  document.body.classList.remove("is-scroll-disabled");
}

// === Кнопки ===
menuBtnOpen.addEventListener("click", openMenu);
menuBtnClose.addEventListener("click", closeMenu);

// === Клік по пункту меню ===
menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    closeMenu();
  });
});
