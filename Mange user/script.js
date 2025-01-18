document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('userForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Collect form data
        const userGroup = document.getElementById('userGroup').value;
        const country = document.getElementById('country').value;
        const circle = document.getElementById('circle').value;
        const username = document.getElementById('username').value;
        const loginId = document.getElementById('loginId').value;
        const email = document.getElementById('email').value;
        const mobileNumber = document.getElementById('mobileNumber').value;
        const status = document.getElementById('status').value;

        // Simple validation
        if (!userGroup || !country || !circle || !username || !loginId || !email || !mobileNumber || !status) {
            alert('Please fill all the fields');
            return;
        }

        // Simulate saving data to the database
        console.log({
            userGroup,
            country,
            circle,
            username,
            loginId,
            email,
            mobileNumber,
            status
        });

        alert('User created successfully!');
        document.getElementById('userForm').reset();
    });
});
