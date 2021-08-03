Array.from(document.querySelectorAll('.pricex'))
.forEach( element => {
    element.onmouseover = () => element.parentElement.parentElement.classList.toggle('change');
    element.onmouseout = () => element.parentElement.parentElement.classList.toggle('change');
}
 )

const colors = ['#6495ed', '#7fffd4', '#ffa07a', '#f08080', '#afeeee'];
count =0 ;
Array.from(document.querySelectorAll('menu-link')).forEach(item => {
    item.style.cssText=`background-color:${colors[count++]}`
})
