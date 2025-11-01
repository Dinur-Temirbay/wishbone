const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const menuLinks = document.querySelectorAll('.header__link');

burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
});

menuLinks.forEach(link => {
	link.addEventListener('click', () => {
		burger.classList.remove('active');
		menu.classList.remove('active');
	});
});
