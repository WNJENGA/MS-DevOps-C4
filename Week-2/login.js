const valueVerifier = (email, password) => {
    if (email == '' && password == '') {
        alert('Please provide an email and/or a password');
    }
}

const passwordVerifier = (value) => {
    if (value.length < 4) {
        alert('The password should be greater than 4 characters');
    }
}

const userOne = { 'email': 'email@email.com', 'password': 'password' };

const loginFunction = (email, password) => {
    if (email == userOne.email && password == userOne.password) {
        const loginMessage = 'You are now logged is as ' + email;
        alert(loginMessage);
    } else {
        alert('Please review your email and/or your password');
    }
}

const loginHandler = () => {
    // Retrieve the email and password elements
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Retrieve the email and password values
    const email = emailInput.value;
    const password = passwordInput.value;

    // Verify that email and password are not empty
    valueVerifier(email, password);

    // Verify that the password is greater than 4 characters
    passwordVerifier(password);

    // Check against existing users in the system to verify if the user is registered and if password matches
    loginFunction(email, password);
}