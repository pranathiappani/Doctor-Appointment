// Sign-Up Function
function signUp() {
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;

    if (username && password) {
        // Store credentials in localStorage
        localStorage.setItem(username, password);
        localStorage.setItem('loggedIn', false); // Set default login state to false
        document.getElementById('signupMessage').textContent = 'Account created successfully!';
        document.getElementById('signupMessage').style.color = 'green';
        
        // Redirect to login page after signup
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1000);
    } else {
        document.getElementById('signupMessage').textContent = 'Please fill all fields.';
    }
}

// Login Function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check credentials in localStorage
    if (localStorage.getItem(username) === password) {
        localStorage.setItem('loggedIn', 'true');  // Set login status
        window.location.href = 'appointment.html'; // Redirect to appointment page
    } else {
        document.getElementById('loginMessage').textContent = 'Invalid credentials, please try again.';
    }
}

// Appointment Page Access Check
// Redirect to login page if not logged in
if (window.location.pathname.includes('appointment.html') && localStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'login.html';
}

// Book Appointment Function
function bookAppointment() {
    const patientName = document.getElementById('patientName').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const doctorName = document.getElementById('doctorName').value;

    if (patientName && appointmentDate && doctorName) {
        document.getElementById('bookingMessage').textContent = 
            `Appointment booked for ${patientName} with ${doctorName} on ${appointmentDate}.`;
        document.getElementById('bookingMessage').style.color = 'green';
    } else {
        document.getElementById('bookingMessage').textContent = 'Please fill in all fields.';
        document.getElementById('bookingMessage').style.color = 'red';
    }
}
