const navMenu = document.getElementById('nav-links')
const openMenu = document.getElementById('toggle-menu')
const closeMenu = document.getElementById('close-menu')

console.log(navMenu)
openMenu.addEventListener('click', () =>{
    navMenu.classList.toggle('open')
})
closeMenu.addEventListener('click', () =>{
    navMenu.classList.toggle('open')
})
// var marker = document.querySelector('#marker');
// var item = document.querySelectorAll('nav a');

// function indicator(e){
//     marker.style.left = e.offsetLeft +"px";
//     marker.style.width = e.offsetWidth+"px";
// }

// item.forEach(link => {
//     link.addEventListener('click', (e)=>{
//         indicator(e.target);
//     })
// })

//For html  

// <!-- <script type="text/javascript">
//         var marker = document.querySelector('#marker');
//         var item = document.querySelectorAll('nav a');

//         function indicator(e){
//             marker.style.left = e.offsetLeft +"px";
//             marker.style.width = e.offsetWidth+"px";
//         }

//         item.forEach(link => {
//             link.addEventListener('click', (e)=>{
//                 indicator(e.target);
//             })
//         })
//     </script> -->
//     <script type="text/javascript" src="{{ url_for('static', filename= 'script/nav.js') }}"></script>