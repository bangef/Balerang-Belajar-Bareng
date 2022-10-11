import data from "./State/index.js";
import { showUI } from "./Components/index.js";

showUI(data.menuNavbar, "#menu-list", "menu-navbar");
showUI(data.whychouseus, ".whychoseus__right__slider", "card");
showUI(data.testimonial, ".swiper-wrapper", "card-testimonial");

const swiper = new Swiper(".my-swipper", {
	slidesPerView: 3,
	spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 3,
		},
	},
	loop: true,
});
