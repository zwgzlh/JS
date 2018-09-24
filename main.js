var basket = []

function registerPurchaseListeners() {
		let items = document.getElementById('store').children
		for (let i = 0; i < items.length; i++) {
			let item = items[i]			
			item.addEventListener('click', handlePurchase.bind(this, item))
		}		
}

function handlePurchase(item, event) {
	let product = { title: item.children[0].innerText,
					price: Number.parseFloat(item.children[1].innerText.match(/\d+/)[0]) }
	basket.push(product)
	calculatePrice()
}

function calculatePrice() {
	let sum = 0;
	basket.forEach(function (item, basket) {
		sum += item.price
	})

	document.getElementById('total-price').innerText = 'Сумма: ' + sum
}

window.onload = registerPurchaseListeners