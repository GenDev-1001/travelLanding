const burger = document.querySelector(".burger");
const menuList = document.querySelector(".menu__list");

const clickBurgerHandle = () => {
	menuList.classList.toggle("menu__list-active");
	burger.classList.toggle("burger-active");
};

burger.addEventListener("click", clickBurgerHandle);

const swiper = new Swiper(".reviews__cards", {
	slidesPerView: 1,
	spaceBetween: 0,
	breakpoints: {
		600: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		1210: {
			slidesPerView: 3,
			spaceBetween: 25,
		},
	},
});
