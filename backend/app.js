require('dotenv').config();
const express = require('express');

const app = express();
const port = 5000;
const axios = require('axios');
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


// Get Analysis
app.get('/getAnalysis', async (req, res) => {

    try {
        const response = await axios.get('http://localhost:3000/get_analysis');
        const analysis = response.data;
        res.status(200).json({ message: analysis });
    }

    catch(err) {
        res.status(500).json({ message: err.message });
    }

});


// Get Habits
app.get('/getHabits', async (req, res) => {

    try {
        const response = await axios.get('http://localhost:3000/get_habits');
        const habits = response.data;
        res.status(200).json({ message: habits });
    }

    catch(err) {
        res.status(500).json({ message: err.message });
    }

});

// Get Habits
app.get('/compareLastWeek', async (req, res) => {

    try {
        const response = await axios.get('http://localhost:3000/compare_weeks');
        const comparison = response.data;
        res.status(200).json({ message: comparison});
    }

    catch(err) {
        res.status(500).json({ message: err.message });
    }

});