const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    if (username === 'admin' && password === 'admin') {
        
        window.location.href = 'currency.html';
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});