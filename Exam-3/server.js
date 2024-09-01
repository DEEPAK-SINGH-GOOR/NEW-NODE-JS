const express = require('express');
const bodyParser = require('body-parser');
const fileRoutes = require('./routes/fileRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/file', fileRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
