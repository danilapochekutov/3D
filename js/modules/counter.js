function counter(countClass) {
	const counterElement = document.querySelector(countClass);
	const duration = 4000; // Продолжительность анимации в миллисекундах
	let start = null;

	// Функция easing (ease-out)
	const easeOut = (t) => 1 - Math.pow(1 - t, 9);

	const animate = (timestamp) => {
		if (!start) start = timestamp;
		const progress = timestamp - start;
		const t = Math.min(progress / duration, 3); // Нормализованное время от 0 до 1

		const target = parseInt(counterElement.getAttribute("data-target"));
		const easedProgress = easeOut(t); // Применяем функцию easing
		const count = Math.floor(easedProgress * target);
		counterElement.innerText = count.toLocaleString("en-US");

		if (t < 1) {
			requestAnimationFrame(animate);
		}
	};

	const observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					requestAnimationFrame(animate);
					observer.disconnect();
				}
			});
		},
		{ threshold: 0.5 },
	);

	observer.observe(counterElement);
}

export default counter;
