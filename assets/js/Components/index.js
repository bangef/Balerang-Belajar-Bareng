//Buat function fragment element
const createCardComponent = (path, title, desc, delayAos) => {
	return `<div class="whychoseus__right__slider__item" data-aos="zoom-in"
						data-aos-delay="${delayAos}"><img class="whychoseus__right__slider__item__image" src="${path}" alt="${title}"/><h2 class="whychoseus__right__slider__item__title">${title}</h2><p class="whychoseus__right__slider__item__describe">${desc}</p></div>`;
};
const createCardTestimonialComponent = (
	testiWord,
	pathImage,
	fullName,
	position,
	delayAos
) => {
	return `<div class="swiper-slide testimonial__center" data-aos="zoom-in" data-aos-delay="${delayAos}"><div class="testimonial__card"><div class="testimonial__card__top"><img src="./assets/image/testimonial-img-1.svg" alt="testimonial-quote"/><p>${testiWord}</p></div><div class="testimonial__card__bottom"><img src="${pathImage}" alt="profile - ${fullName}"/><h1>${fullName}</h1><p>${position}</p></div></div></div>`;
};
const createMenuNavbarComponents = (menuName, directTo) =>
	`<li><a href="${directTo}">${menuName}</a></li>`;
// Ambil target wadah
const showUI = (data, selector, createForWhat) => {
	let temp = "";
	switch (createForWhat) {
		case "menu-navbar":
			temp = data
				.map(({ menuName, directTo }) =>
					createMenuNavbarComponents(menuName, directTo)
				)
				.join("");
			break;
		case "card":
			temp = data
				.map(({ path, title, desc }, index) =>
					createCardComponent(path, title, desc, `${index}00`)
				)
				.join("");
			break;
		case "card-testimonial":
			temp = data
				.map(({ testiWord, pathImage, fullName, position }, index) =>
					createCardTestimonialComponent(
						testiWord,
						pathImage,
						fullName,
						position,
						`${index}00`
					)
				)
				.join("");
			break;
		default:
			console.log("Parameter createForWhat tidak cocok!");
			break;
	}
	document.querySelector(selector).innerHTML = temp;
};
export { showUI };
