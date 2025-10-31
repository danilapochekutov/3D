function guarantee(container) {
	const Button = document.querySelector(".guarantee__button");
	const hideContainer = document.querySelectorAll(container);
	let scrollPosition = 0;
	let isContentVisible = false;

	Button.addEventListener("click", () => {
		hideContainer.forEach((content) => {
			if (isContentVisible) {
				if (content.classList.contains("animate__fadeInRight")) {
					content.classList.remove("animate__fadeInRight");
				}
				content.classList.add("animate__fadeOutRight");
				Button.setAttribute("disabled", "true");
				setTimeout(() => {
					window.scrollTo(0, scrollPosition);
					content.style.display = "none";
					Button.textContent = "More Features";
					Button.removeAttribute("disabled");
				}, 700);
			} else {
				scrollPosition = window.scrollY;
				if (content.classList.contains("animate__fadeOutRight")) {
					content.classList.remove("animate__fadeOutRight");
				}
				content.classList.add("animate__fadeInRight");
				setTimeout(() => {
					content.style.display = "block";
					Button.textContent = "Hide Features";
				}, 700);
			}
		});
		isContentVisible = !isContentVisible;
	});
}

export default guarantee;
