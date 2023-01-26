const express = require('express');
require('dotenv').config()

const app = express();

const indexRoutes = require('./routes/index');
const homeRoutes = require('./routes/home');
const aboutRoutes = require('./routes/about');

const PORT = process.env.PORT || 3000

app.use('/', indexRoutes);
app.use('/home', homeRoutes);
app.use('/about', aboutRoutes);

app.listen(PORT, () => {
    console.log('Server is running');
});