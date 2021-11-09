const btn = document.querySelector('.promo_btn'),
      menuBurger = document.querySelector('.burger_menu'),
      menu = document.querySelector('.menu'),
      menuItem = document.querySelectorAll('.menu_link');

btn.addEventListener('click', () => {
    alert("Click!")
});

menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('burger_menu_active');
    menu.classList.toggle('menu_active');
})

menuItem.forEach(e => {
    e.addEventListener('click', () => {
        menuBurger.classList.toggle('burger_menu_active');
        menu.classList.toggle('menu_active');
    })
});
