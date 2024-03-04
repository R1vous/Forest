const burgerIcon = document.querySelector('.main-nav__hamburger');
const listMenu = document.querySelector('.main-nav__links');

const toggleMenu = () => {
	listMenu.classList.toggle('main-nav__links--show');
};

burgerIcon.addEventListener('click', toggleMenu);
