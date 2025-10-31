function headerNav() {
    let isBurgerOpen = false;
    let isToggleLangDesktopOpen = false;
    let isToggleLangMobileOpen = false;
    let clickDisabled = false;
    function isMobileDevice() {
        return window.innerWidth < 768;
    }

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

    function toggleOverlay(overlay) {
        overlay.classList.toggle("active");
    }

    function toggleNoScroll() {
        const header = document.querySelector('.header');
        const toggleLang = document.querySelector('.toggle-lang__desktop');
        const burger = document.querySelector('.burger__wrapper');
        
        if (document.body.classList.contains("no-scroll")) {
            document.body.classList.remove("no-scroll");
            document.body.style.removeProperty('padding-right');
            if (header) header.style.removeProperty('max-width');
            if (header) header.style.removeProperty('padding-right');
            if (toggleLang) toggleLang.style.removeProperty('right');
            if (burger) burger.style.removeProperty('right');
            
        } else {
            // Вычисляем ширину скроллбара
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.classList.add("no-scroll");
            document.body.style.paddingRight = `${scrollbarWidth}px`;
            if (header) {
                const currentPadding = parseInt(getComputedStyle(header).paddingRight) || 180;
                header.style.paddingRight = `${currentPadding + scrollbarWidth}px`;
                header.style.maxWidth = `${1695}px`;
            }
            if (toggleLang) {
                const currentRight = parseInt(getComputedStyle(toggleLang).right) || 228;
                toggleLang.style.right = `${currentRight + scrollbarWidth}px`;
            }
            
            if (burger) {
                const currentRight = parseInt(getComputedStyle(burger).right) || 180;
                burger.style.right = `${currentRight + scrollbarWidth}px`;
            }
        }
    }

    const burger = document.querySelector(".burger");
    const mobileMenu = document.querySelector(".header__nav");
    const overlay = document.querySelector(".overlay");
    const header = document.querySelector(".header");
    const menuGradient = document.querySelector(".menu-gradient");

    const toggleLangDesktop = document.querySelector(".toggle-lang__desktop .toggle-lang");
    const toggleLangMobile = document.querySelector(".toggle-lang__mobile .toggle-lang");
    const toggleLangWrappDesktop = document.querySelector(".toggle-lang__desktop");
    const toggleLangWrappMobile = document.querySelector(".toggle-lang__mobile");

    function toggleHeaderBackground(isOpen) {
        if (menuGradient && header && mobileMenu) {
            if (isOpen) {
                menuGradient.style.display = "block";
                toggleClass(menuGradient, "animate__fadeInDown", "animate__fadeOutUp");
            } else {
                toggleClass(menuGradient, "animate__fadeInDown", "animate__fadeOutUp");
                setTimeout(() => {
                    menuGradient.style.display = "none";
                }, 700);
            }
        }
    }

    function closeBurger() {
        burger.classList.remove("clicked");
        toggleClass(mobileMenu, "animate__fadeInDown", "animate__fadeOutUp");
        toggleDisplay(mobileMenu, "grid", "none");
        toggleOverlay(overlay);
        toggleNoScroll();
        toggleHeaderBackground(false);
        
        // Используем функцию вместо константы
        if (isMobileDevice() && toggleLangMobile) {
            toggleLangMobile.classList.remove("active__toggle-lang");
            isToggleLangMobileOpen = false;
        }
        
        isBurgerOpen = false;
    }
    
    // Открытие/закрытие бургера
    burger.addEventListener("click", function () {
        if (clickDisabled) return;

        clickDisabled = true;
        setTimeout(() => { clickDisabled = false; }, 700);

        // Используем функцию вместо константы
        if (isToggleLangDesktopOpen && !isMobileDevice() && toggleLangDesktop) {
            toggleLangDesktop.classList.remove("active__toggle-lang");
            isToggleLangDesktopOpen = false;
        }

        burger.classList.toggle("clicked");
        toggleClass(mobileMenu, "animate__fadeInDown", "animate__fadeOutUp");
        toggleDisplay(mobileMenu, "grid", "none");
        toggleOverlay(overlay);
        toggleNoScroll();
        
        const willBeOpen = burger.classList.contains("clicked");
        toggleHeaderBackground(willBeOpen);
        
        // Используем функцию вместо константы
        if (!willBeOpen && isMobileDevice() && toggleLangMobile) {
            toggleLangMobile.classList.remove("active__toggle-lang");
            isToggleLangMobileOpen = false;
        }

        isBurgerOpen = willBeOpen;
    });

    // ДЕСКТОПНЫЙ переключатель языка
    if (toggleLangWrappDesktop) {
        toggleLangWrappDesktop.addEventListener("click", function () {
            if (clickDisabled) return;
            
            // Используем функцию вместо константы
            if (isBurgerOpen && !isMobileDevice()) {
                clickDisabled = true;
                closeBurger();
                setTimeout(() => {
                    toggleLangDesktop.classList.toggle("active__toggle-lang");
                    isToggleLangDesktopOpen = toggleLangDesktop.classList.contains("active__toggle-lang");
                    clickDisabled = false;
                }, 700);
            } else {
                toggleLangDesktop.classList.toggle("active__toggle-lang");
                isToggleLangDesktopOpen = toggleLangDesktop.classList.contains("active__toggle-lang");
            }
        });
    }
    
    // МОБИЛЬНЫЙ переключатель языка
    if (toggleLangWrappMobile) {
        toggleLangWrappMobile.addEventListener("click", function () {
            if (clickDisabled) return;
            
            toggleLangMobile.classList.toggle("active__toggle-lang");
            isToggleLangMobileOpen = toggleLangMobile.classList.contains("active__toggle-lang");
        });
    }

    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        if (!isMobileDevice()) {
            // Переключились на десктоп - закрываем мобильный переключатель
            if (toggleLangMobile) {
                toggleLangMobile.classList.remove("active__toggle-lang");
                isToggleLangMobileOpen = false;
            }
        } else {
            // Переключились на мобилку - закрываем десктопный переключатель
            if (toggleLangDesktop) {
                toggleLangDesktop.classList.remove("active__toggle-lang");
                isToggleLangDesktopOpen = false;
            }
        }
    });

    // Закрытие меню при клике на overlay
    overlay.addEventListener("click", function() {
        if (isBurgerOpen) {
            closeBurger();
        }
    });

    // Отслеживание скролла для появления/исчезновения подложки
    (function() {
        let scrolled = false;
        const threshold = 10; // Порог скролла в пикселях

        function handleScroll() {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            
            if (currentScroll > threshold && !scrolled) {
            // Пользователь прокрутил вниз
            document.body.classList.add('scrolled');
            scrolled = true;
            } else if (currentScroll <= threshold && scrolled) {
            // Пользователь вернулся в начало
            document.body.classList.remove('scrolled');
            scrolled = false;
            }
        }

        // Добавляем слушатель события с оптимизацией
        let ticking = false;
        window.addEventListener('scroll', function() {
            if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
            }
        }, { passive: true });

        // Начальная проверка НЕ выполняется - компонент скрыт до первого скролла
    })();
}

export default headerNav;