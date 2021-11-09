const btn = document.querySelector('.promo_btn'),
      burger_btn = document.querySelector('.burger_menu'),
      menuBurger = document.querySelector('.burger_menu'),
      menu = document.querySelector('.menu');

btn.addEventListener('click', () => {
    alert("Click!")
});

burger_btn.addEventListener('click', () => {
    menuBurger.classList.toggle('burger_menu_active');
    menu.classList.toggle('menu_active');
})
