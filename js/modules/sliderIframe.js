function sliderIframe(slider1) {
	const cryptoPioneer = document.querySelector(slider1);

	Object.assign(cryptoPioneer, {
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

	cryptoPioneer.initialize();
}

export default sliderIframe;
