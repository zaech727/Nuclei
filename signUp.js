// Initialize Firebase
// Set up Firebase Admin
const serviceAccount = require('wildhacks2024-c4ebe-firebase-adminsdk-quhxo-3b8ec4503e.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = firebase.firestore();
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();


// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
// import { getAuth } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
// import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';

var developerKey = 'AIzaSyBHCuQpXHP3HADYwIK6_1vR8TEHAQIUWTw';
var clientId = '754744343679-98dvss980nt5cjelhmfocaogtk5aqtra.apps.googleusercontent.com';
var scope = ['https://www.googleapis.com/auth/drive.file'];

var pickerApiLoaded = false;
var oauthToken;

async function getGoogleKey() {
    try {
      const apiKeyDoc = await db.collection('APIkeys').doc('Google').get();
      if (!apiKeyDoc.exists) {
        console.log('API Key document does not exist.');
        return null;
      }
      const openAIKey = apiKeyDoc.data().key;
      return openAIKey;
    } catch (error) {
      console.error('Error retrieving OpenAI API key:', error);
      return null;
    }
  }
const firebaseConfig = {
    // Import the functions you need from the SDKs you need
    apiKey: getGoogleKey(),
    authDomain: "wildhacks2024-c4ebe.firebaseapp.com",
    projectId: "wildhacks2024-c4ebe",
    storageBucket: "wildhacks2024-c4ebe.appspot.com",
    messagingSenderId: "633918308151",
    appId: "1:633918308151:web:cb76ba44f6869c08fb64b2",
    measurementId: "G-5N3Z29D7RD" };

// Load the picker API
function loadPicker() {
  gapi.load('auth', {'callback': onAuthApiLoad});
  gapi.load('picker', {'callback': onPickerApiLoad});
}

function onAuthApiLoad() {
  window.gapi.auth.authorize(
    {
      'client_id': clientId,
      'scope': scope,
      'immediate': false
    },
    handleAuthResult);
}

function onPickerApiLoad() {
  pickerApiLoaded = true;
  createPicker();
}

function handleAuthResult(authResult) {
  if (authResult && !authResult.error) {
    oauthToken = authResult.access_token;
    createPicker();
  }
}

// Create and render a Picker object for searching images.
function createPicker() {
  if (pickerApiLoaded && oauthToken) {
    var picker = new google.picker.PickerBuilder()
        .addView(google.picker.ViewId.FOLDERS)
        .setOAuthToken(oauthToken)
        .setDeveloperKey(developerKey)
        .setCallback(pickerCallback)
        .build();
    picker.setVisible(true);
  }
}

// A simple callback implementation.
function pickerCallback(data) {
  if (data[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
    var doc = data[google.picker.Response.DOCUMENTS][0];
    console.log('Selected folder ID:', doc.id);
    // You can now use the selected folder ID to work with Google Drive API
  }
}

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

