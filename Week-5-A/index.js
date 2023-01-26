const express = require('express');
require('dotenv').config()

const app = express();

const indexRoutes = require('./routes/index');
const homeRoutes = require('./routes/home');

const PORT = process.env.PORT || 3000

app.use('/', indexRoutes);
app.use('/home', homeRoutes);

app.listen(PORT, () => {
    console.log('Server is running');
});