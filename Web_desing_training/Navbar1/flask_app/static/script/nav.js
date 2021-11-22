
var marker = document.querySelector('#marker');
var item = document.querySelectorAll('nav a');

function indicator(e){
    marker.style.left = e.offsetLeft +"px";
    marker.style.width = e.offsetWidth+"px";
}

item.forEach(link => {
    link.addEventListener('click', (e)=>{
        indicator(e.target);
    })
})

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