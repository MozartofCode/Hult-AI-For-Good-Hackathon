require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Parse JSON request bodies

app.get('/', (req, res) => {
    res.send('Hello, Node.js Backend!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
