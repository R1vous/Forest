const burgerIcon = document.querySelector('.main-nav__hamburger');
const listMenu = document.querySelector('.main-nav__links');
const hamburgerBars = document.querySelector('.main-nav__hamburger-bars');
const menuLinks = document.querySelectorAll('.main-nav__link');

const toggleMenu = () => {
	listMenu.classList.toggle('main-nav__links--show');
	hamburgerBars.classList.toggle('main-nav__hamburger-bars--is-active');
};
const closeMenu = () => {
	listMenu.classList.remove('main-nav__links--show');
	hamburgerBars.classList.remove('main-nav__hamburger-bars--is-active');
};

const clickHandler = e => {
	if (!e.target.classList.contains('li-menu') && !e.target.classList.contains('main-nav__hamburger-bars')) {
		closeMenu();
	}
};

burgerIcon.addEventListener('click', toggleMenu);
menuLinks.forEach(link => link.addEventListener('click', closeMenu));
window.addEventListener('click', clickHandler);
