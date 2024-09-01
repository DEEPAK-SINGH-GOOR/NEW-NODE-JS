// server.js
const express = require('express');
const bodyParser = require('body-parser');
const calculatorRoutes = require('./routes/calculatorRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/calculator', calculatorRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
