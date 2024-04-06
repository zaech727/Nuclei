const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const algoliasearch = require('algoliasearch');
const { Configuration, OpenAIApi } = require('openai');
const admin = require('firebase-admin');

// Set up Firebase Admin
const serviceAccount = require('C:/WildHacks 2024/wildhacks2024-c4ebe-firebase-adminsdk-quhxo-3b8ec4503e.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore(); 

// Algolia setup
const algoliaAppId = '1K87H1EUZ5';
const algoliaApiKey = '37442b8b0c0cb667b38c6d464aa835ae';
const algoliaIndexName = 'TASA';
const algoliaClient = algoliasearch(algoliaAppId, algoliaApiKey);
const algoliaIndex = algoliaClient.initIndex(algoliaIndexName);

const app = express();
let port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, world! Welcome to my API server with Algolia search.');
});

app.post('/generate-response', async (req, res) => {
    try {
        const userQuery = req.body.query;

        // Algolia search
        const algoliaResults = await algoliaIndex.search(userQuery);
        const algoliaData = algoliaResults.hits.map(hit => hit.title).join(', ');

        // Firebase - Retrieve OpenAI API Key
        const apiKeyDoc = await db.collection('APIkeys').doc('OpenAI').get();
        if (!apiKeyDoc.exists) {
            return res.status(404).send('API Key document does not exist.');
        }
        const openAIKey = apiKeyDoc.data().key;

        // Configure OpenAI
        const configuration = new Configuration({
            apiKey: openAIKey
        });
        const openai = new OpenAIApi(configuration);

        // OpenAI - Create completion
        const prompt = `Based on the following data: ${algoliaData}, the user query was: ${userQuery}.`;
        const gptResponse = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: prompt,
            max_tokens: 150
        });

        // Send response
        res.status(200).json({ response: gptResponse.data.choices[0].text });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('An error occurred while processing your request.');
    }
});

const startServer = () => {
    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    }).on('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        console.log(`Port ${port} is already in use, trying port ${port + 1}`);
        port++;
        startServer(); // Try to start the server again with the new port
      } else {
        console.error('Failed to start server:', error);
      }
    });
  };
  
  startServer(); // Initial call to start the server