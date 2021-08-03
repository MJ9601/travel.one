const colors = ['#ed6464', '#c9c955', '#78bf39', '#39bfad', '#3975bf'];
count =0 ;
Array.from(document.querySelectorAll('.menu-link')).forEach(item => {
    item.style.cssText=`background-color:${colors[count++]}`;
})

Array.from(document.querySelectorAll('.navbar-icon'))
        .forEach(element => {
            element.onclick = () => document.querySelector('.nav').classList.toggle('change');
        })


Array.from(document.querySelectorAll('.pricex'))
.forEach( element => {
    element.onmouseover = () => element.parentElement.parentElement.classList.toggle('change');
    element.onmouseout = () => element.parentElement.parentElement.classList.toggle('change');
}
 )


