const express = require('express');
const authRoute = require('./routes/auth.route');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.use('/api/auth', authRoute);

module.exports = app;