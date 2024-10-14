var menuBar = document.querySelector('#menu_bar');
var navLinks = document.querySelector('.nav_links');

navLinks.computedStyleMap.top = '450px';

menuBar.onclick = function () {
    if (navLinks.computedStyleMap.top == '450px'){
        navLinks.computedStyleMap.top - '50px';
    } else {
        navLinks.style.top = '-450px'
    }
};