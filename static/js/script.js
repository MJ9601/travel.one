Array.from(document.querySelectorAll('.pricex'))
.forEach( element => {
    element.onmouseover = () => element.parentElement.parentElement.classList.toggle('change');
    element.onmouseout = () => element.parentElement.parentElement.classList.toggle('change');
}
 )


