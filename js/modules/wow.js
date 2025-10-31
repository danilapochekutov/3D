function animation() {
	let wow = new WOW({
		boxClass: "wow",
		animateClass: "animate__animated",
		offset: 0,
		mobile: true,
		live: true,
		callback: function (box) {
			if (box.classList.contains("animation-go")) {
				const text = document.querySelector(".guarantee__text span");
				if (text) {
					text.classList.add("type");
				}

				const textMin = document.querySelector(".guarantee__text-min span");
				if (textMin) {
					textMin.classList.add("type");
				}
			}

			if (box.classList.contains("move-it")) {
				const resize = document.querySelector(".slider__resize");
				const divider = document.querySelector(".slider__divider");
				if (resize) {
					resize.style.animation = "sliderAnimation 5s linear";
					setTimeout(() => {
						divider.style.opacity = "1";
					}, 5000);
				}
			}
			if (box.classList.contains("portfolio")) {
				const animatedItems = document.querySelectorAll(".portfolio__item");
				const windowWidth = window.innerWidth;
				if (windowWidth < 768) {
					animatedItems.forEach((content, index) => {
						index += 1;
						if (index % 2 !== 0) {
							content.classList.add("animate__animated", "animate__fadeInLeft");
						} else {
							content.classList.add("animate__animated", "animate__fadeInRight");
						}
					});
				} else {
					animatedItems.forEach((content, index) => {
						const group = Math.floor(index / 3);
						if (group % 2 === 0) {
							content.classList.add("animate__animated", "animate__fadeInLeft");
						} else {
							content.classList.add("animate__animated", "animate__fadeInRight");
						}
					});
				}
			}
			if (box.classList.contains("reviews__container")) {
				const viewMoreContent = document.querySelectorAll(".view");
				const windowWidth = window.innerWidth;
				viewMoreContent.forEach((content) => {
					content.classList.add("animate__animated", "animate__fadeInLeft");
				});
				if (windowWidth < 768) {
					viewMoreContent.forEach((content) => {
						content.classList.add(
							"animate__animated",
							"animate__fadeInLeft",
							"reviews-animation-set-1",
						);
					});
				}
			}
			if (box.classList.contains("feedback")) {
				const swiper = new Swiper(".feedback__slider-container", {
					slidesPerView: 1,
					centeredSlides: true,
					spaceBetween: 30,
					pagination: {
						el: ".feedback__pagination",
						clickable: true,
					},
					navigation: {
						nextEl: ".feedback-button-next",
						prevEl: ".feedback-button-prev",
					},
					on: {
						init: function () {
							const currentSlide = this.slides[this.activeIndex];
							const iframe = currentSlide.querySelector("iframe[data-src]");
							if (iframe) {
								iframe.setAttribute("src", iframe.getAttribute("data-src"));
								iframe.removeAttribute("data-src");
							}
						},
						slideChange: function () {
							const currentSlide = this.slides[this.activeIndex];
							const iframe = currentSlide.querySelector("iframe[data-src]");
							if (iframe) {
								iframe.setAttribute("src", iframe.getAttribute("data-src"));
								iframe.removeAttribute("data-src");
							}
						},
					},
				});
			}
			if (box.classList.contains("offer__slider")) {
				animateSlider();
			}
			if (box.classList.contains("nfts")) {
				const resize = document.querySelector(".nfts__resize");
				const divider = document.querySelector(".nfts__divider");
				const title = document.querySelector(".nfts__title--white");
				if (resize) {
					resize.style.animation = "sliderAnimation 5s linear";
					title.style.animation = "titleAnimation 5s linear";
					setTimeout(() => {
						divider.style.opacity = "1";
					}, 5000);
				}
			}
		},
	});

	wow.init();
}

// Анимация ползунка
function animateSlider() {
	const sliderInput = document.getElementById("sliderInput");
	const rightValue = document.getElementById("rightValue");
	const emojiImage = document.getElementById("emojiImage");

	let startValue = parseInt(sliderInput.value);
	const endValue = parseInt(sliderInput.max);

	// Анимация ползунка
	function animate() {
		if (startValue < endValue) {
			startValue += 50; // скорость увеличения
			sliderInput.value = startValue;
			rightValue.textContent = startValue.toLocaleString("en-US");

			// Изменение изображения эмодзи
			if (startValue >= 1000 && startValue < 2000) {
				emojiImage.src = "./icons/offer/1-2.svg";
			} else if (startValue >= 2000 && startValue < 5000) {
				emojiImage.src = "./icons/offer/2-5.svg";
			} else if (startValue >= 5000 && startValue < 7000) {
				emojiImage.src = "./icons/offer/5-7.svg";
			} else if (startValue >= 7000 && startValue <= 10000) {
				emojiImage.src = "./icons/offer/7-10.svg";
			}

			requestAnimationFrame(animate);
		}
	}

	requestAnimationFrame(animate);
}

export default animation;
