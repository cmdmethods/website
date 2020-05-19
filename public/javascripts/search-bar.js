const searchBar = document.forms['search-box'].querySelector('input')

searchBar.addEventListener('keyup', function (e) {
	const term = e.target.value.toLowerCase()
	const cards = document.getElementById('card-list').children

	Array.from(cards).forEach(function (card) {
		const title = card.firstElementChild.textContent
		if (title.toLowerCase().indexOf(term) != -1) {
			card.classList.add('display-card')
		} else {
			card.classList.add('hide-card')
		}
	})
})
