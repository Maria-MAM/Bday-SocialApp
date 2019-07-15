

APP.renderItemList = (itemArray) => {
	const itemList = document.querySelector('#item-list');
	itemList.innerHTML = '';
	itemArray.forEach( (elem) => {	
		item = new Item(elem.image, elem.name, elem.description);
		item.renderItem();
	});
}

