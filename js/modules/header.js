function headerNav() {
	function toggleWidth(element, height1, height2) {
		if (element.style.height === height1) {
			element.style.height = height2;
		} else {
			element.style.height = height1;
		}
	}

	function toggleDisplay(element, display1, display2) {
		if (element.style.display === display1) {
			element.style.display = display2;
		} else {
			setTimeout(() => {
				element.style.display = display1;
			}, 200);
		}
	}

	function toggleBackground(element) {
		element.classList.toggle("gradient-background");
	}

	function toggleOverlay(overlay) {
		overlay.classList.toggle("active");
	}

	function toggleNoScroll() {
		document.body.classList.toggle("no-scroll");
	}

	const burger = document.querySelector(".burger");
	const mobileMenu = document.querySelector(".header__nav");
	const header = document.querySelector(".header");
	const overlay = document.querySelector(".overlay");
	// const toggleLang = document.querySelector(".header__nav-item__toggle-lang");

	burger.addEventListener("click", function () {
		burger.classList.toggle("clicked");
		toggleWidth(header, "272px", "80px");
		toggleBackground(header);
		toggleDisplay(mobileMenu, "flex", "none");
		toggleOverlay(overlay);
		toggleNoScroll();
		// if (!burger.classList.contains("clicked")) {
		// 	toggleLang.classList.remove("active__toggle-lang");
		// }
	});

	// toggleLang.addEventListener("click", function () {
	// 	toggleLang.classList.toggle("active__toggle-lang");
	// });
}
export default headerNav;
