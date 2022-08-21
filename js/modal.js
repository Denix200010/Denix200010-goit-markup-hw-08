(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    backdrop: document.querySelector('.backdrop'),
  };

  refs.openModalBtn.addEventListener("click", open);
  refs.closeModalBtn.addEventListener("click", close);
  refs.backdrop.addEventListener('click', onBackdropClick);

  function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    close();
  }
  }
  function onEscKeyPress(event) {
    const isEscKey = event.code === 'Escape';
    if (isEscKey) {
      close();
    }
  }

  function open() {
    window.addEventListener('keydown', onEscKeyPress);
    refs.modal.classList.remove("is-hidden");
  }
  function close() {
    window.removeEventListener('keydown', onEscKeyPress);
    refs.modal.classList.add('is-hidden');
  }
})();
(() => {
  document.querySelector('.js-speaker-form').addEventListener('submit', e => {
    e.preventDefault();

    new FormData(e.currentTarget).forEach((value, name) =>
      console.log(`${name}: ${value}`),
    );
  });
})();



