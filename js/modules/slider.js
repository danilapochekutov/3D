function initializeSlider(slider, options = {}) {
	const resizeElement = slider.querySelector(".slider__resize");
	const divider = slider.querySelector(".slider__divider");

	updateSliderWidth(slider);

	let isDragging = false;
	let startX = 0;

	function startDrag(e) {
		isDragging = true;
		resizeElement.classList.add("resizable");
		divider.classList.add("draggable");

		// Определение начальной точки касания или клика
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

		const windowWidth = window.innerWidth;
		let marginRight = windowWidth < 768 ? 17 : 22;

		let containerRect = slider.getBoundingClientRect();
		let xPos = Math.max(
			0,
			Math.min(pageX - containerRect.left, containerRect.width - marginRight),
		);

		let widthPercent = (xPos / containerRect.width) * 100;
		resizeElement.style.width = widthPercent + "%";
		divider.style.left = widthPercent + "%";

		// Обновление clip-path для белого текста, если опция включена
		if (options.changeColor) {
			const titleWhite = slider.querySelector(".nfts__title--white");
			if (titleWhite) {
				titleWhite.style.clipPath = `inset(0 ${100 - widthPercent}% 0 0)`;
			}
		}
	}

	function stopDrag() {
		isDragging = false;
		resizeElement.classList.remove("resizable");
		divider.classList.remove("draggable");
	}

	// Определяем, мобильное устройство или нет
	const isMobile = window.matchMedia("(max-width: 768px)").matches;

	if (isMobile) {
		// Обработка событий на мобильных устройствах
		slider.addEventListener("touchstart", startDrag);
		slider.addEventListener("touchmove", drag);
		slider.addEventListener("touchend", stopDrag);
	} else {
		// Обработка событий на десктопе
		divider.addEventListener("mousedown", startDrag);
		document.addEventListener("mousemove", drag);
		document.addEventListener("mouseup", stopDrag);
	}
}

function updateSliderWidth(slider) {
	const resizeElement = slider.querySelector(".slider__resize");
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
