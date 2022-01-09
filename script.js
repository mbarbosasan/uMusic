const navbarActive = document.querySelector('.navbar-open')
const navbarDeactive = document.querySelector('.navbar-close')
const navbar = document.querySelector('.navbar')

navbarActive.addEventListener('click', toggleButton)
navbarDeactive.addEventListener('click', toggleButton)

function toggleButton() {
  navbar.classList.toggle('active')
}