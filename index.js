
window.APP = {};

window.mainPage = document.querySelector('#root');
// creez un array cu datele userilor sub forma de obiecte
APP.users = [
	{
		firstName: 'Ioana',
		lastName: 'Stanciu',
        dateOfBirth: '01/05/2000',
        phoneNumber: '0755972425',
		password: '1234',
		wishlist: [{
			image: 'https://www.tablomania.ro/fotky15882/fotos/tablouri-canvas_XOBCZ004E50-gal.jpg',
			name: 'Tablou 5 piese',
			description: 'ba laba lajhd dja ksdg aksd'
		}]
	},
	{
		firstName: 'Margareta',
		lastName: 'Mioara',
        dateOfBirth: '01/10/1990',
        phoneNumber: '0755666777',
        password: '234',
	},
	{
		firstName: 'Catalin',
		lastName: 'Grama',
        dateOfBirth: '13/12/1980',
        phoneNumber: '0766777888',
        password: '345',
	}
];
// functia care adauga userii in Local Storage
APP.addusers = (users) => {
	localStorage.setItem("users", JSON.stringify(users));
}
// functia care extrage userii din Local Storage
APP.getusers = () => {
	const users = localStorage.getItem("users");
	return JSON.parse(users);
};

if (APP.getusers() === null){
	APP.addusers(APP.users);
}

// creez un array cu datele produselor sub forma de obiecte
APP.items = [
	{
		image: 'https://www.tablomania.ro/fotky15882/fotos/tablouri-canvas_XOBCZ004E50-gal.jpg',
		name: 'Tablou 5 piese',
		description: 'Dimensiune ansamblu: 70 x 125 cm'
	},
	{
		image: 'https://www.flightcentre.ca/images/newdesign/round_the_world-flights-header.jpg',
		name: 'Bilete de avion in jurul lumii',
		description: 'Europa, Asia, Australia și America de Sud. 40.000 de kilometri. '
	},
	{
		image: 'https://www.eflorist.co.uk/Products/300x350/DE19BQTSF05S.jpg',
		name: 'Flori',
		description: 'Florile sunt poeziile pământului.'
	}
];


// functia care adauga produsele in Local Storage
APP.additems = (items) => {
	localStorage.setItem("items", JSON.stringify(items));
}
// functia care extrage produsele din Local Storage
APP.getitems = () => {
	const items = localStorage.getItem("items");
	return JSON.parse(items);
};

if (APP.getitems() === null){
	APP.additems(APP.items);
}