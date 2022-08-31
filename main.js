
const Navigation = document.getElementById("navigation")

function onScroll() {
    showNavOnScroll()
    showBackToTopButtonScroll()
}

function showNavOnScroll() {
    if (scrollY > 0) {
        Navigation.classList.add('scroll')
    } else {
        Navigation.classList.remove('scroll')
    }
}
function showBackToTopButtonScroll() {
    if (scrollY > 550) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700
}).reveal(`
  #home,
  #home .header-title,
  #home p,
  #about,
  #about .header-title
`)

// 57: 00 da terceira video aula