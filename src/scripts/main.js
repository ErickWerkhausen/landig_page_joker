var button = document.querySelector("#shows");
var nav = document.querySelector('.header__nav');

button.onclick = e =>{
    if (!nav.classList.contains('oculto')) {
        nav.classList.add('oculto');
    } else {
        nav.classList.remove('oculto');
    }
}
