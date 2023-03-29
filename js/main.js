$(document).ready(function() {

    // Search Form
    let search_btn = document.querySelector('.search-btn');
    let search_form = document.querySelector('.search-form');

    search_btn.onclick = () => {
        search_form.classList.toggle('active');
        cart_items.classList.remove('active');
    }

    // Cart
    let cart_btn = document.querySelector('.cart-btn');
    let cart_items = document.querySelector('.cart-items');

    cart_btn.onclick = () => {
        cart_items.classList.toggle('active');
        search_form.classList.remove('active');
    }

    // Mobile Menu
    let menu_icon = document.querySelector('.menu-icon i');
    let menu_list = document.querySelector('.menu ul');

    menu_icon.onclick = () => {
        menu_list.classList.toggle('active');
        menu_icon.classList.toggle('bx-x');
        cart_items.classList.remove('active');
        search_form.classList.remove('active');
    }

    window.onscroll = () => {
        cart_items.classList.remove('active');
        search_form.classList.remove('active');
    }

})