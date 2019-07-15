// adaugam functionalitate butoanelor din pagina de start

// SIGN IN
let signIn = document.querySelector('#signIn'); 
signIn.addEventListener('click', displaySignIn);

function displaySignIn() {
    mainPage.innerHTML = '';
    mainPage.innerHTML += `
            <form>
                <div>
                    <label for="phoneNo">Phone number:</label>
                     <input type="number" id="phoneNumber">
                     </div>
                    <div>
                      <label for="pass">Password:</label>
                    <input type="password" id="password">
                 </div>
                 <button type="submit" value="Submit" id="submitSignIn">Submit</button>
            </form>
            `
    let submitSignIn = document.querySelector('#submitSignIn');
    submitSignIn.addEventListener('click', verifyCredentials);
}

// verificam daca datele introduse de utilizator exista in baza de date (Local Storage)
function verifyCredentials(event) {
    event.preventDefault();
    let newUsers = APP.getusers();
    for (let i = 0; i <= newUsers.length - 1; i++) {
        let phoneNumber = document.querySelector('#phoneNumber');
        let password = document.querySelector('#password');
        console.log(newUsers[i].phoneNumber);
        console.log(newUsers[i].password);
        var userExists = false;
        if (phoneNumber.value && (newUsers[i].phoneNumber == phoneNumber.value)) {
            if (password.value && (newUsers[i].password == password.value)) {
                console.log('victorie');
                var userActual = phoneNumber.value;
                console.log(userActual);
                userExists = true;
                console.log(userExists)
                window.location = "siteBody.html";
                break;
            }
        }
    }
    if (!userExists) {
        alert('Incorrect credentials! Please try again...');
        phoneNumber.value = '';
        password.value = '';
    }
}

// SIGN UP
let signUp = document.querySelector('#signUp');
signUp.addEventListener('click', displaySignUp);

function displaySignUp() {
    mainPage.innerHTML = '';
    mainPage.innerHTML += `
            <form>
                <div>
                    <label for="firstName">First Name:</label>
                     <input type="text" id='first-name'>
                </div>
                <div>
                    <label for="lastName">Last Name:</label>
                     <input type="text" id='last-name'>
                </div>
                <div>
                    <label for="birthDate">Date of birth:</label>
                    <input type="date" id='birth-date'>
                </div>
                <div>
                    <label for="phoneNo">Phone number:</label>
                     <input type="number" id='phone-no'>
                </div>
                <div>
                    <label for="pass">Password:</label>
                    <input type="password" id='password'>
                 </div>
                 <button type="submit" value="Submit" id="submitSignUp">Submit</button>
            </form>`
    let submitSignUp = document.querySelector('#submitSignUp');
    submitSignUp.addEventListener('click', submitForm);
};

function submitForm() {
    event.preventDefault();
    let firstName = document.querySelector('#first-name').value;
    let lastName = document.querySelector('#last-name').value;
    let birthDate = document.querySelector('#birth-date').value;
    let phoneNo = document.querySelector('#phone-no').value;
    let password = document.querySelector('#password').value;
    // verific daca toate campurile din formularul de inscriere sunt completate
    if (firstName && lastName && birthDate && phoneNo && password) {
        APP.users.push({
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: birthDate,
            phoneNumber: phoneNo,
            password: password,
        });
        window.location = "siteBody.html";
    } else alert('Fields must not be empty!')
    APP.addusers(APP.users);
    APP.getusers();
    if (APP.getusers() === null) {
        APP.addusers(APP.users);
    };
}




