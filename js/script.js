//Mobile menu
$('.menu__btn').click(function() {
  $('.menu').toggleClass('menu--opened');
  $('.menu__list').slideToggle();
});

$('.menu__down').click(function() {
  $(this).toggleClass('menu__down--up');
  $(this).next().slideToggle();
});
