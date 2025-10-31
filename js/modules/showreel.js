function showreel() {
	const swiper = new Swiper(".showreel__container", {
		slidesPerView: 1.625,
		centeredSlides: true,
		spaceBetween: 24,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1.2,
				spaceBetween: 8,
			},
			480: {
				slidesPerView: 1.625,
				spaceBetween: 24,
			},
		},
	});
}
export default showreel;
