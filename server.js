//server exec
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const entries = []; 

// Use body-parser middleware to parse request body
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname)));

// Handle form submission
app.post('/submit-form', (req, res) => {
  entries.push(req.body); // Add the form data to the entries array
  const json = JSON.stringify(entries, null, 2);
  fs.writeFile('data.json', json, 'utf8', (err) => {
    if (err) throw err;
    console.log('Data written to file');
    res.json(req.body); // send form data as a JSON response
  });
});

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve styles.css
app.get('/styles.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'styles.css'));
});

// Serve file.js
app.get('/file.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'file.js'));
});

// Serve 2file.js
app.get('/2file.js', (req, res) => {
  res.sendFile(path.join(__dirname, '2file.js'));
});

// Serve data.json
app.get('/data.json', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
