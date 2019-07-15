class User {
	constructor(firstName, lastName, dateOfBirth, phoneNumber, password, wishlist) {
		this.firstName = firstName;
		this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.phoneNumber = phoneNumber;
		this.password = password;
		this.wishlist = wishlist
    }
	renderUser() {
		const UserList = document.querySelector('#user-list');
		UserList.innerHTML += `
			<ul class="user">
                <li>Firstname: ${this.firstName}</li>
                <li>Lastname: ${this.lastName}</li>
                <li>Date Of Birth: ${this.dateOfBirth}</li>
				<li>Phone Number: ${this.phoneNumber}</li>
			</ul>
		`;
	}
}
