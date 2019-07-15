

function addFunctionality() {
  mainPage.innerHTML = '';
  console.log(1);
  mainPage.innerHTML += `
      <h2>Friends:</h2>
      <div id="user-list">
      </div>
  `;
  const users = APP.getusers();
  APP.renderUserList(users);
}

let users = document.querySelector('#users');

users.addEventListener('click', addFunctionality);
