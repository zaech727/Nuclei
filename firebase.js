const admin = require('firebase-admin');
const serviceAccount = require('C:/WildHacks 2024/wildhacks2024-c4ebe-firebase-adminsdk-quhxo-3b8ec4503e.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore(); 