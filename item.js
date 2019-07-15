class Item {
	constructor(image, name, description) {
		this.image = image;
		this.name = name;
		this.description = description;
    }
	renderItem() {
		const ItemList = document.querySelector('#item-list');
		ItemList.innerHTML += `
			<ul class="item">
				<button class="delete">X</button>
				<div>
				<img src="${this.image}" alt="imagine cadou">
				</div>
				<li>Nume: ${this.name}</li>
                <li>Descriere: ${this.description}</li>
			</ul>
		`;
	}
}
