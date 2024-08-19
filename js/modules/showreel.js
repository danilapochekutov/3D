function showreel(container) {
	function updateSlidesPerView() {
		const swiperContainer = document.querySelector(container);
		const windowWidth = window.innerWidth;

		if (windowWidth < 768) {
			swiperContainer.setAttribute("slides-per-view", "1.2");
			swiperContainer.setAttribute("space-between", "8");
		} else {
			swiperContainer.setAttribute("slides-per-view", "1.625");
			swiperContainer.setAttribute("space-between", "24");
		}
	}

	window.addEventListener("resize", updateSlidesPerView);
	window.addEventListener("orientationchange", updateSlidesPerView);
	window.addEventListener("load", updateSlidesPerView);
	updateSlidesPerView();
}
export default showreel;
