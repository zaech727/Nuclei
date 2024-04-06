document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;

    // Attempt to sign in with the provided email and password
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User logged in successfully
            console.log("User logged in successfully:", userCredential.user);
            // Redirect to another page after successful login
            window.location.href = 'sidepanel.html'; // Ensure this points to your next page's URL or path
        })
        .catch((error) => {
            // Handle errors, such as wrong password or user not found
            const errorCode = error.code;
            const errorMessage = error.message;

            if (errorCode === 'auth/user-not-found') {
                alert("No user found with this email.");
            } else if (errorCode === 'auth/wrong-password') {
                alert("Incorrect password.");
            } else {
                alert(errorMessage); // Generic error message for other errors
            }

            console.error("Error during sign in:", error);
        });
});