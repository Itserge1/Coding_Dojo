const allMenu = document.getElementById('nav-links')
const openMenu = document.getElementById('nav-toggle')
const closeMenu = document.getElementById('nav-close')

// Using toggle classlist
openMenu.addEventListener('click', () => {
    allMenu.classList.toggle('animation')
})
closeMenu.addEventListener('click', () => {
    allMenu.classList.toggle("animation")
})

// Use add and remove classlist

// openMenu.addEventListener('click', () => {
//     allMenu.classList.add('animation')
// })
// closeMenu.addEventListener('click', () => {
//     allMenu.classList.remove("animation")
// })