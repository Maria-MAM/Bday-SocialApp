
// functia care se declanseaza atunci cand se apasa "Items" din bara de meniu
function addFormFunctionality() {
  mainPage.innerHTML = '';
  mainPage.innerHTML += `
      <form id="addItem">
          <p>URL imagine:</p> <input type="text" name="itemImage" id="url" required>
          <p>Nume:</p> <input type="text" name="itemName" id="name" required>
          <p>Descriere:</p> <input type="text" name="itemDescription" id="description" required>
          <input type="submit" value="Adauga produs" id="button" required>
      </form>
      <h2>Items:</h2>
      <div id="item-list">
      </div>
    `;
  const items = APP.getitems();
  APP.renderItemList(items);

  // functia care adauga produsele in Local Storage atunci cand se apasa "Submit"
  function addItem(imageI, nameI, descriptionI) {
    // preluam produsele din localStorage
    const items = APP.getitems();
    // modificarea vectorului de produse
    items.push({
      image: imageI,
      name: nameI,
      description: descriptionI
    });
    // adaugam vectorul in localStorage
    APP.additems(items);

    // reafisam produsele
    APP.renderItemList(items);
  }

  const form = document.querySelector('#addItem');
  form.onsubmit = function (event) {
    // trebuie sa prevenim reincarcare paginii
    event.preventDefault();
    // luam datele introduse de utilizator
    let image = event.target.itemImage.value;
    let name = event.target.itemName.value;
    let description = event.target.itemDescription.value;
    // verifical daca URL-ul este unul valid (altfel nu se afiseaza imaginea)
    function checkURL(url) {
      return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    }
    if (!checkURL(image)) {
      alert('The URL provided is not a valid image format!')
    } else
      // apelam functia de adaugare a produsului
      addItem(image, name, description);

    // vreau sa nu mai am valori in campurile de input
    document.getElementById('url').value = '';
    document.getElementById('name').value = '';
    document.getElementById('description').value = '';

  }
  // functii care sterg produse din Local Storage si pagina
  // daca dam click pe un tag care are clasa 'delete' si raspundem la intrebarea din alerta cu 'OK' atunci stergem elementul
  function deleteItem(el) {
    if (el.classList.contains('delete')) {
      let response = confirm("Stergeti produsul selectat?");
      if (response == true) {
        el.parentElement.remove();
        // stergem produsul si din localStorage
        let nume = el.nextSibling.nextSibling.nextSibling.nextSibling.innerText.split(": ")[1];
        removeItem(nume);
      }
    }
  }
  // functia care sterge din localStorage produsul selectat
  function removeItem(name) {
    const items = APP.getitems();
    items.forEach((item, index) => {
      if (item.name === name) {
        items.splice(index, 1);
      }
    });
    localStorage.setItem('items', JSON.stringify(items));
  }
  document.querySelector('#item-list').addEventListener('click', (e) => {
    deleteItem(e.target)
  })
}
// totul incepe cand se apasa "Items" din bara de meniu
let items = document.querySelector('#items');
items.addEventListener('click', addFormFunctionality);

