
function wishlistFunctionality() {
    mainPage.innerHTML = '';
    mainPage.innerHTML += `
      <h2>Wishlist:</h2>
      <div id="wishlist">
      </div>
  `;
    console.log(userActual);
}

let wishlist = document.querySelector('#wishlist');
wishlist.addEventListener('click', wishlistFunctionality);
