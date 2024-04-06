document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;

    // Assuming `db` is your Firestore instance initialized earlier
    // `email` and `password` are the user inputs to check

    db.collection("Email&Pass").doc(email).get()
    .then((doc) => {
    if (doc.exists && doc.data().password === password) {
        // The document exists and the password matches
        console.log("User found and authenticated:", doc.data());
        window.location.href = 'sidepanel.html'; // Redirect on successful login
    } else {
        // No document found or password does not match
        alert("Incorrect email or password.");
    }
    })
    .catch((error) => {
    console.error("Error searching user:", error);
    alert("An error occurred while trying to log in.");
    });


});

