const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelectorAll(".modal-btn-open");
const modalBtnClose = document.querySelector(".modal-btn-close");
const body = document.body;

const openModal = () => {
  modal.classList.remove("is-hidden");
  body.classList.add("no-scroll");
};
const closeModal = () => {
  modal.classList.add("is-hidden");
  body.classList.remove("no-scroll");
};
// const toggleModal = () => modal.classList.toggle("is-hidden");

modalBtnOpen.forEach((btn) => {
  btn.addEventListener("click", openModal);
});
modalBtnClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
