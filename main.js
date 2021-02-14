let pages = document.querySelector('.pages');

let pageVal = document.querySelector('.slider');

let currency = document.querySelector('.cur');

let priceText = document.querySelector('.price');

let checkbox = document.querySelector('input[type="checkbox"]');

let body = document.querySelector('body');

let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

let discount = document.querySelector('.discount');

let price = [ 8, 12, 16, 24, 36 ];

let vals = [ 10, 50, 100, 500, 1 ];

priceText.innerHTML = '$' + '8' + '.00';

pages.innerHTML = vals[pageVal.value];

let dis = 8;

function bodyWidth(width, discount) {
	if (width < 370) {
		discount.innerHTML = '-25% ';
	}
}

bodyWidth(width, discount);

pageVal.addEventListener('input', () => {
	pages.innerHTML = `${vals[pageVal.value]}`;

	if (pages.innerHTML == '1') {
		currency.innerHTML = 'M';
	} else {
		currency.innerHTML = 'K';
	}

	let i = pageVal.value;

	dis = `${price[i]}`;

	priceText.innerHTML = '$' + `${price[i]}` + '.00';
});

checkbox.addEventListener('change', () => {
	if (checkbox.checked) {
		let semiFinal = 25 / 100;

		let final = semiFinal * dis;

		priceText.innerHTML = '$' + `${dis - final}` + '.00';
	} else {
		priceText.innerHTML = '$' + `${dis}` + '.00';
	}
});
