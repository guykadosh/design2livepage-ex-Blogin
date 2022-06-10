function toggleMenu() {
  document.body.classList.toggle('menu-open')

  document
    .querySelector('.main-screen')
    .removeEventListener('click', toggleModal)

  document.querySelector('.main-screen').addEventListener('click', toggleMenu)
}

function toggleModal() {
  document.body.classList.toggle('modal-open')

  document
    .querySelector('.main-screen')
    .removeEventListener('click', toggleMenu)

  document.querySelector('.main-screen').addEventListener('click', toggleModal)
}
