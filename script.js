//signup page js code start

document.addEventListener('DOMContentLoaded', function() {
    // Get form and its elements
    const signupForm = document.getElementById('signupForm');
    const signupUsername = document.getElementById('signupUsername');
    const signupPassword = document.getElementById('signupPassword');
    const signupMobile = document.getElementById('signupMobile');

    // Event listener for form submission
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        const username = signupUsername.value;
        const password = signupPassword.value;
        const mobile = signupMobile.value;

        // Validate password (at least 8 characters)
        
        if (password.length < 8) {
            alert('Password must be at least 8 characters long');
            return;
        }

        // Validate phone number (basic check for digits and length)
        if (!/^\d{10}$/.test(mobile)) {
            alert('Invalid mobile number. Please enter a 10-digit number.');
            return;
        }

        // Store data in local storage
        const userData = {
            username: username,
            password: password,
            mobile: mobile
        };

        localStorage.setItem('userData', JSON.stringify(userData));

        // Reset form fields
        signupForm.reset();

        alert('Signup successful!');
        //go to home page
        window.location.href = 'home.html';
        //after clear input element data
        document.getElementById('signupUsername').value = ''; 
        document.getElementById('signupPassword').value = '';
    });
});


//signup page js code end



//login page js code start


document.addEventListener('DOMContentLoaded', function() {
    // Get form and its elements
    const loginForm = document.getElementById('loginForm');
    const loginUsername = document.getElementById('loginUsername');
    const loginPassword = document.getElementById('loginPassword');

    // Event listener for form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        const username = loginUsername.value;
        const password = loginPassword.value;

        // Retrieve stored user data from local storage
        const storedUserData = JSON.parse(localStorage.getItem('userData'));

        if (storedUserData) {
            // Compare input with stored data
            if (username === storedUserData.username && password === storedUserData.password) {
                alert('Login successful!');
                
                //go to home page

                window.location.href = 'home.html';
                //after clear input element data
                document.getElementById('signupUsername').value = ''; 
                document.getElementById('signupPassword').value = '';

            } else {
                alert('Invalid username or password. Please try again.');
            }
        } else {
            alert('No user data found. Please sign up first.');
        }
    });
});

//login page js code end






