const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001; // Fixed port number

// Serve static files from the dist directory under the /public route
app.use('/public', express.static(path.join(__dirname, 'dist')));

// Handle all GET requests to /public/* and send back the index.html
app.get('/public/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://australianwhisky.gprlive.com:${PORT}/public`);
});
