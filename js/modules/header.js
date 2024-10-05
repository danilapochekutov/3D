function headerNav() {

    let isBurgerOpen = false;
    let isToggleLangOpen = false;
    let clickDisabled = false;
	const isMobile = window.innerWidth < 768;

    function toggleClass(element, class1, class2) {
        if (element.classList.contains(class1)) {
            element.classList.remove("animate__animated", class1);
            element.classList.add("animate__animated", class2);
        } else {
            element.classList.remove(class2);
            element.classList.add("animate__animated", class1);
        }
    }

    function toggleDisplay(element, display1, display2) {
        if (element.style.display === display1) {
            setTimeout(() => {
                element.style.display = display2;
            }, 700);
        } else {
            setTimeout(() => {
                element.style.display = display1;
            }, 200);
        }
    }

	function togglangDisp(element, display1, display2) {
        if (element.style.display === display1) {
            element.style.display = display2;
        } else {
            element.style.display = display1;
        }
    }

    function toggleOverlay(overlay) {
        overlay.classList.toggle("active");
    }

    function toggleNoScroll() {
		if (document.body.classList.contains("no-scroll")) {
			document.body.classList.remove("no-scroll");
			document.body.style.removeProperty('padding-right');
		} else {
			const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
			document.body.classList.add("no-scroll");
			document.body.style.paddingRight = `${scrollbarWidth}px`;
		}
	}

	function togglPos(element, display1, display2) {
        if (element.style.position === display1) {
            element.style.position = display2;
			element.style.overflowY = "visible"
        } else {
            element.style.position = display1;
			element.style.overflowY = "scroll"
        }
    }

    const burger = document.querySelector(".burger");
    const mobileMenu = document.querySelector(".header__nav");
    const overlay = document.querySelector(".overlay");
    const toggleLang = document.querySelector(".toggle-lang");
    const toggleLangWrapp = document.querySelector(".toggle-lang__wrapper");
	const header = document.querySelector(".header");

	if(isMobile) {
		toggleLang.classList.add("animate__animated", "animate__fadeInDownBig");
	}

    function closeBurger() {
        burger.classList.remove("clicked");
        toggleClass(mobileMenu, "animate__fadeInDown", "animate__fadeOutUp");
        toggleDisplay(mobileMenu, "grid", "none");
        toggleOverlay(overlay);
        toggleNoScroll();
        isBurgerOpen = false; 
    }
	
	
    // Функция для открытия/закрытия бургера
    burger.addEventListener("click", function () {
        if (clickDisabled) return;

        clickDisabled = true;
        setTimeout(() => { clickDisabled = false; }, 700);

		if (isToggleLangOpen && !isMobile) {
            toggleLang.classList.remove("active__toggle-lang");
            isToggleLangOpen = false;
        }

		if(isMobile) {
			togglPos(header,  "fixed", "absolute")
			togglangDisp(toggleLang,  "flex", "none")
		}

        burger.classList.toggle("clicked");
        toggleClass(mobileMenu, "animate__fadeInDown", "animate__fadeOutUp");
        toggleDisplay(mobileMenu, "grid", "none");
        toggleOverlay(overlay);
        toggleNoScroll();
		
		if (!isBurgerOpen && isMobile) {
            toggleLang.classList.remove("active__toggle-lang");
            isToggleLangOpen = false;
        }

        isBurgerOpen = burger.classList.contains("clicked");
    });

    // Функция для открытия/закрытия переключателя языка
    toggleLangWrapp.addEventListener("click", function () {
        if (clickDisabled) return;
		
        if (isBurgerOpen && !isMobile) {
            clickDisabled = true;
            closeBurger();
            setTimeout(() => {
                toggleLang.classList.toggle("active__toggle-lang");
                isToggleLangOpen = toggleLang.classList.contains("active__toggle-lang");
                clickDisabled = false;
            }, 700);
        } else {
            toggleLang.classList.toggle("active__toggle-lang");
            isToggleLangOpen = toggleLang.classList.contains("active__toggle-lang");
        }
    });
}

export default headerNav;
