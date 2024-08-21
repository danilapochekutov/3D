function sliderIframe() {
	const swiper = new Swiper(".crypto-pioneer__container", {
		slidesPerView: 1,
		centeredSlides: true,
		spaceBetween: 30,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".crypto-pioneer__pagination",
			clickable: true,
		},
	});
}

export default sliderIframe;
