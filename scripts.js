document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Sign up successful! A verification code has been sent to your email or phone.');
});

document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your review!');
});
