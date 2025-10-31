function reviews() {
	const Button = document.querySelector(".reviews__button");
	const hideContainer = document.querySelectorAll(".reviews__item__hide-768px");
	let scrollPosition = 0;
	let isContentVisible = false;
	const windowWidth = window.innerWidth;

	Button.addEventListener("click", () => {
		hideContainer.forEach((content) => {
			if (isContentVisible) {
				content.classList.remove(
					"animate__animated",
					"animate__fadeInLeft",
					"reviews-animation-set-1",
				);
				content.classList.add(
					"animate__animated",
					"animate__fadeOutLeft",
					"reviews-animation-set-2",
				);

				Button.setAttribute("disabled", "true");
				setTimeout(() => {
					content.style.display = "none";
					Button.textContent = "View More";
					Button.removeAttribute("disabled");
					window.scrollTo(0, scrollPosition);
				}, 950);
			} else {
				scrollPosition = window.scrollY;
				content.classList.remove(
					"animate__animated",
					"animate__fadeOutLeft",
					"reviews-animation-set-2",
				);
				content.classList.add(
					"animate__animated",
					"animate__fadeInLeft",
					"reviews-animation-set-1",
				);

				content.style.display = "block";
				Button.textContent = "Hide Reviews";
			}
		});
		isContentVisible = !isContentVisible;
	});
}

export default reviews;
