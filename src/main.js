import { updatePie } from "./updatePie.js";
import { updateCashPoition } from "./updateCashPosition.js";



function listenQuantity(event) {
	const tick = Array.from(document.querySelectorAll('.ticker'));
	const pric = Array.from(document.querySelectorAll('.price'));
	const quan = Array.from(document.querySelectorAll('.quantity'));

	let tick1 = tick.map(element => element.textContent.trim());
	let pric1 = pric.map(element => parseFloat(element.textContent.trim()));
	let quan1 = quan.map(element => parseFloat(element.value.trim()));

	for(let i = 0; i < tick1.length;i++){
		if (Number.isNaN(quan1[i])) {quan1[i] = 0;}
	}

	updatePie(tick1,pric1,quan1);
	updateCashPoition(pric1,quan1);
}

listenQuantity();
const quants = document.querySelectorAll('.quantity');


// Add an event listener to each textbox
quants.forEach(quant => {
    quant.addEventListener('input', listenQuantity);  // Listen for input changes
});



let stockArray = ['AMZN','AAPL','MSFT','GOOG','TSLA','NVDA','META'];

async function updatePrice() {
	if (stockArray.length == 0) {
		stockArray = ['AMZN','AAPL','MSFT','GOOG','TSLA','NVDA','META'];
	}
	let tk = stockArray.pop;
	console.log(tk)
	let ell = document.getElementById(tk);
	ell.textContent = getStockPrice([tk]);
}

const button = document.getElementById('button');
button.addEventListener('click',updatePrice);
