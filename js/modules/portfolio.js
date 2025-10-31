function portfolio() {
	let isContentVisible = false;
	let scrollPosition = 0;
	const Button = document.querySelector(".portfolio__button");
	document.querySelector(".portfolio__button").addEventListener("click", function () {
		const animatedItems = document.querySelectorAll(".portfolio__item.hide");

		animatedItems.forEach((content, index) => {
			index += 1;
			if (isContentVisible) {
				content.classList.remove(
					"animate__animated",
					"animate__fadeInLeft",
					"animate__fadeInRight",
				);
				index += 1;
				if (index % 2 === 0) {
					content.classList.add("animate__animated", "animate__fadeOutLeft");
				} else {
					content.classList.add("animate__animated", "animate__fadeOutRight");
				}
				setTimeout(() => {
					content.style.display = "none";
					Button.textContent = "More Works";
					window.scrollTo(0, scrollPosition);
				}, 1000);
			} else {
				scrollPosition = window.scrollY;
				content.style.display = "block";
				content.classList.remove(
					"animate__animated",
					"animate__fadeOutLeft",
					"animate__fadeOutRight",
				);
				index += 1;
				if (index % 2 === 0) {
					content.classList.add("animate__animated", "animate__fadeInLeft");
				} else {
					content.classList.add("animate__animated", "animate__fadeInRight");
				}
				Button.textContent = "Hide Works";
			}
		});
		isContentVisible = !isContentVisible;
	});
}

export default portfolio;
