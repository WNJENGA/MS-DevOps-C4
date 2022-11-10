$(document).ready(function () {
    $('form#loginForm').submit(function (event) {
        const email = $('input#email').val();
        const password = $('input#password').val();
        const date = $('input#date').val();

        $('input#email').val('This is an email from backend');

        console.log(date);

        if (email == '' && password == '') {
            alert('Please enter an email and a a password');
        } else {
            if (!String(email).includes('@')) {
                alert('Please enter a valid email');
            } else {
                // alert('Logged in');
                $('body').append('<h1>Logged In</h1>')
            }
        }

        event.preventDefault();
    });
});