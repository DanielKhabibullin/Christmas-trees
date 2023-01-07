const createGarland = () => {
	const garland = document.createElement('div');
	garland.classList.add('garland', 'garland_1');
	
	document.body.append(garland);
	
	const style = document.createElement('style');
	
	style.textContent = `
	body {
		position: relative;
	}
	body:after {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 19;
	
		background-image: url(../garland/christmas-tree-angle.png);
		background-position: 0 60.79px;
		background-repeat: no-repeat;
		pointer-events: none;
	}
	
	
	.garland {
		position: absolute;
		top: 60px;
		left: 0;
		right: 0;
		z-index: 18;
	
		height: 36px;
	
		background-image: url(../garland/christmas.png);
		pointer-events: none;
	
	}
	
	.garland_1 {
		background-position: 60px 0;
	}
	
	.garland_2 {
		background-position: 60px -36px ;
	}
	
	.garland_3 {
		background-position: 60px -72px ;
	}
	
	.garland_4 {
		background-position: 60px -108px ;
	}
	
	@media (max-width: 1440px) {
		body:after {
			display: none;
		}
	}
	
	@media (max-width: 768px) {
		.garland {
			display: none;
		}
	}
	`;
	
	document.head.append(style);
	
	let orderGarland = 1;
	
	setInterval(() => {
	
		switch (orderGarland) {
			case 1:
				garland.classList.add('garland_2');
				garland.classList.remove('garland_1');
				orderGarland = 2;
				break;
			case 2:
				garland.classList.add('garland_3');
				garland.classList.remove('garland_2');
				orderGarland = 3;
				break;
			case 3:
				garland.classList.add('garland_4');
				garland.classList.remove('garland_3');
				orderGarland = 4;
				break;
			case 4:
				garland.classList.add('garland_1');
				garland.classList.remove('garland_4');
				orderGarland = 1;
				break;
			}
	}, 500);
	
};

createGarland();

