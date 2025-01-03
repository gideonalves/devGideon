window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)   
    activateMenuAtCurrentSection(portfolio)   
    activateMenuAtCurrentSection(about)   
}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2

    // verificar se a seção passou da linha
    // quais dados vou precisar?

    // o topo da seção
    const sectionTop = section.offsetTop
    // a altura da seção
    const sectionHeight = section.offsetHeight

    // o topo da seção chegou ou ultrapassou a linha alto
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

    // verificar se a base está abaixo da linha alvo
    // quais dados vou precisar?

    // a seção termina aonde?
    const sectionEndsAt = sectionTop + sectionHeight
    // o final da seção passou da linha alvo
    const sectionEndPassedTargetline = sectionEndsAt <= targetLine

    // limites da seção
    const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }
}


function showNavOnScroll() {
    const navigation = document.querySelector('#navigation')
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    // const navigation = document.querySelector('#navigation')
    if (scrollY > 550) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

// Abri o menu
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
