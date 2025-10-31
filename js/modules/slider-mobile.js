function initializeSlider(slider) {
	const resizeElement = slider.querySelector(".slider-mobile__resize");

	updateSliderWidth(slider);

	let isDragging = false;
	let startX = 0;

	function startDrag(e) {
		isDragging = true;
		resizeElement.classList.add("resizable");

		if (e.touches && e.touches.length > 0) {
			startX = e.touches[0].pageX;
		} else {
			startX = e.pageX;
		}
	}

	function drag(e) {
		if (!isDragging) return;

		let pageX;
		if (e.pageX !== undefined) {
			pageX = e.pageX;
		} else if (e.touches && e.touches.length > 0) {
			pageX = e.touches[0].pageX;
		} else {
			return;
		}

		let containerRect = slider.getBoundingClientRect();
		let xPos = Math.max(0, Math.min(pageX - containerRect.left, containerRect.width));

		let widthPercent = (xPos / containerRect.width) * 100;
		resizeElement.style.width = widthPercent + "%";

		// Обновление clip-path
		const polygonPercent = widthPercent + (33 * (100 - widthPercent)) / 100;
		resizeElement.style.clipPath = `polygon(0 0, 100% 0, ${polygonPercent}% 100%, 0 100%)`;
	}

	function stopDrag() {
		isDragging = false;
		resizeElement.classList.remove("resizable");
	}

	slider.addEventListener("touchstart", startDrag);
	slider.addEventListener("touchmove", drag);
	slider.addEventListener("touchend", stopDrag);
}

function updateSliderWidth(slider) {
	const resizeElement = slider.querySelector(".slider-mobile__resize");
	const compSliderWidth = slider.offsetWidth + "px";
	const img = resizeElement.querySelector("img");
	img.style.width = compSliderWidth;
}

function slider(container, options = {}) {
	const compSliders = document.querySelectorAll(container);

	if (compSliders.length > 0) {
		compSliders.forEach((slider) => {
			initializeSlider(slider, options);
		});

		window.addEventListener("resize", () => {
			compSliders.forEach((slider) => {
				updateSliderWidth(slider);
			});
		});
	}
}

export default slider;
