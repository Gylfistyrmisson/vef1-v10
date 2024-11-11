export function updateCashPoition(p,q) {
	let elCash = document.getElementById('cash')
	console.log(elCash);

	let cash = parseInt(elCash.textContent.trim());
	
	for(let i = 0; i<q.length; i++) {
		cash -= p[i] * q[i]
	}
	elCash.textContent = String(cash);
}