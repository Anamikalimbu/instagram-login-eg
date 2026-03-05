//CONFIGURATION & STATE
const app = document.getElementById('app');

// Mock credentials for demonstration
const MOCK_USER = { username: 'admin', password: '1234' };

const formHTML = `
    <div class="logo">Instagram</div>
    <form id="loginForm">
        <div class="input-group">
            <input type="text" id="username" placeholder="Phone number, username, or email" autocomplete="off">
        </div>
        <div class="input-group">
            <input type="password" id="password" placeholder="Password">
        </div>
        <button type="submit" class="btn-login">Log In</button>
    </form>
    <div class="divider">
        <div class="line"></div>
        <div class="or-text">OR</div>
        <div class="line"></div>
    </div>
    <a href="#" class="forgot-pass" id="forgotLink">Forgot password?</a>
    <div class="error-msg" id="errorMessage">Username or password is incorrect</div>
`;

// 3. RENDER FUNCTION
function render() {
    app.innerHTML = formHTML;
    attachEventListeners();
}

// 4. EVENT HANDLING
function attachEventListeners() {
    const form = document.getElementById('loginForm');
    const errorMsg = document.getElementById('errorMessage');
    const forgotLink = document.getElementById('forgotLink');

    // Handle Form Submission
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop page reload

        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;

        // Reset error state
        errorMsg.style.display = 'none';
        app.classList.remove('shake');

        // Validation Logic
        if (usernameInput === MOCK_USER.username && passwordInput === MOCK_USER.password) {
            // Success
            errorMsg.innerText = "Login Successful! Redirecting...";
            errorMsg.style.color = "green";
            errorMsg.style.display = 'block';
            
            // Simulate redirect
            setTimeout(() => {
                alert("Welcome to Instagram!");
                // window.location.href = "/home"; 
            }, 1000);
        } else {
            // Failure
            errorMsg.style.display = 'block';
            // Trigger shake animation
            app.classList.add('shake');
            // Remove class after animation ends so it can be triggered again
            setTimeout(() => {
                app.classList.remove('shake');
            }, 500);
        }
    });

    // Handle Forgot Password 
    forgotLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert("This would redirect to the 'Forgot Password' page.");
    });
}

// 5. INITIALIZE
render();