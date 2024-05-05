function signup() {
    var email = document.getElementById('signupEmail').value;
    var name = document.getElementById('signupName').value;
    var password = document.getElementById('signupPassword').value;

    localStorage.setItem('email', email);
    localStorage.setItem('name', name);
    localStorage.setItem('password', password);

    showLoginForm(); 
}

function login() {
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;

    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
        showWelcomePage(); 
    } else {
        alert('Invalid email or password. Please try again.');
    }
}

function showLoginForm() {
    var signupForm = document.getElementById('signupForm');
    var loginForm = document.getElementById('loginForm');

    signupForm.style.display = 'none'; 
    loginForm.style.display = 'block'; 
}

function showWelcomePage() {
    var content = document.getElementById('content');
    content.innerHTML = `
        <div>
            <h2>Welcome to Our Website</h2>
            
        </div>
    `;
}

