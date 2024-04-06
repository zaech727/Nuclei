const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const algoliasearch = require('algoliasearch');

// Replace with your Algolia app ID and admin API key
const algoliaAppId = '1K87H1EUZ5';
const algoliaApiKey = '37442b8b0c0cb667b38c6d464aa835ae';
const algoliaIndexName = 'TASA';

// Initialize Algolia client
const algoliaClient = algoliasearch(algoliaAppId, algoliaApiKey);
const algoliaIndex = algoliaClient.initIndex(algoliaIndexName);

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define a route for the root path
app.get('/', (req, res) => {
    res.send('Hello, world! Welcome to my API server with Algolia search.');
});

// Route that performs a search query against the Algolia index
app.post('/search', async (req, res) => {
    try {
        const { query } = req.body; // Extract the search query from the request body

        // Perform the search query against the Algolia index
        const algoliaResults = await algoliaIndex.search(query);

        // Send back the search results
        res.status(200).json(algoliaResults.hits); // Algolia search results are in the `hits` property
    } catch (error) {
        console.error('Error searching with Algolia:', error);
        res.status(500).send('Error performing search query');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
