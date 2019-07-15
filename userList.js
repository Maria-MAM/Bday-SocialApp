
APP.renderUserList = (userArray) => {
 
    
	const userList = document.querySelector('#user-list');
	userList.innerHTML = '';
	
	userArray.forEach( (elem) => {
		
        user = new User(elem.firstName, elem.lastName, elem.dateOfBirth, elem.phoneNumber, elem.password);
		
		user.renderUser();
	});
}