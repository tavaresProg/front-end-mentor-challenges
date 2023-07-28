const button = document.querySelector('.btn');
const inputField = document.querySelector('.input__field');
const error = document.querySelector('.error');
const errorMessage = document.querySelector('.error__msg');
const emailVerification = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

button.addEventListener('click', () => {

    if (inputField.value.length === 0 || !inputField.value.match(emailVerification)) {
        inputField.style.outline = '1px solid red';
        error.style.display = 'block';
        errorMessage.style.display = 'inline';
        errorMessage.style.color = 'red';
        errorMessage.textContent = "Please provide a valid email address";
    } else {
        inputField.style.outline = '1px solid green';
        error.style.display = 'none';
        errorMessage.style.display = 'inline';
        errorMessage.style.color = 'green';
        errorMessage.textContent = 'Thank you for subscribing to our newsletter!';
    }
});