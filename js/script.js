const elementHeaderMenuBurger  = document.querySelector('.header__menu-burger') ; 
const elementHeaderMenuList = document.querySelector('.menu__list')
elementHeaderMenuBurger.addEventListener('click' , function () {
	elementHeaderMenuBurger.classList.toggle('___active')
	elementHeaderMenuList.classList.toggle('___active')
	if (elementHeaderMenuBurger.classList.contains('___active')) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = 'auto'
	}
})

$(document).ready(function(){
	$('.menu li a').click(function () { // 1
		elementClick = $(this).attr('href');
		destination = $(elementClick).offset().top;
		$('body,html').animate({scrollTop: destination }, 1400);
	});
});
