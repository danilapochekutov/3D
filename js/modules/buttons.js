function buttons(classButton, idButton) {
	document.querySelectorAll(classButton).forEach((button) => {
		button.addEventListener("click", () => {
			const url = button.getAttribute("data-url");
			if (url) {
				button.setAttribute("disabled", "true");
				window.open(url, "_blank");
				setTimeout(() => {
					button.removeAttribute("disabled");
				}, 1000);
			}
		});
	});

	document.querySelectorAll(idButton).forEach((button) => {
		button.addEventListener("click", () => {
			const url = button.getAttribute("data-url");
			if (url) {
				button.setAttribute("disabled", "true");
				window.open(url, "_blank");
				setTimeout(() => {
					button.removeAttribute("disabled");
				}, 1000);
			}
		});
	});
}

export default buttons;
