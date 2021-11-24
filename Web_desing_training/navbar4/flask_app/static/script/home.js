const navMenu = document.getElementById('nav-links'),
    toggleMenu = document.getElementById('toggle-menu'),
    closeMenu = document.getElementById('close-menu')

toggleMenu.addEventListener('click', () =>{
navMenu.classList.toggle('show')
})
closeMenu.addEventListener('click', () =>{
navMenu.classList.toggle('show')
})

