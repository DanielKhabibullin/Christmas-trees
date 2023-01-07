function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const createSnow = (min, max, saturation) => {
	const style = document.createElement('style');

	style.textContent =`
	body {
		position: relative;
	}
	.snow {
		width: 30px;
		height: 30px;
	
		position: fixed;
		top: -30px;
		z-index: 30;
		pointer-events: none;
		background-repeat: no-repeat;
		background-position: center;

		animation-name: fall;
		animation-timing-function: linear;
	}

	@keyframes fall {
		100% {
			transform: translateY(110vh);
		}
	}
	`;

	document.head.append(style);

	let start = 1;
	const count = 4;

	const createSnowItem = () => {
		const snowItem = document.createElement('div');
		snowItem.classList.add('snow');

		const time = Math.round(getRandomInt(min, max) * 1000);
	
		snowItem.style.cssText = `
		left: ${Math.random() * document.documentElement.clientWidth}px;
		background-image: url('snow/snowflake${getRandomInt(1, 4)}.svg');
		animation-duration: ${time}ms;
		`;
		//		left: ${Math.random() * document.documentElement.clientWidth - document.documentElement.clientWidth /2}px; opacity: ${Math.random()};

		if (start === count) {
			start = 1;
		} else {
			start += 1;
		}

		document.body.append(snowItem);
		setTimeout(() => {
			snowItem.remove();
		}, time)
	}
	if (saturation > 500) {
		saturation = 500;
	}

	setInterval(createSnowItem, 520 - saturation)
};

createSnow(5, 15, 400);