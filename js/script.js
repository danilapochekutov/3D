"use strict";

import animation from "./modules/wow.js";
import showreel from "./modules/showreel.js";
import guarantee from "./modules/guarantee.js";
import slider from "./modules/slider.js";
import sliderMobile from "./modules/slider-mobile.js";
import portfolio from "./modules/portfolio.js";
import reviews from "./modules/reviews.js";
import sliderIframe from "./modules/sliderIframe.js";

document.addEventListener("DOMContentLoaded", () => {
	animation();
	showreel(".showreel__container");
	guarantee(".guarantee__item__hide-768px");
	slider(".move-it.slider");
	sliderMobile(".move-it-mobile.slider-mobile");
	portfolio();
	reviews();
	sliderIframe(".crypto-pioneer__container");
	slider(".nfts.slider", { changeColor: true });
});
