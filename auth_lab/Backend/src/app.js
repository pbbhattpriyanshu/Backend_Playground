const express = require('express');
const authRoute = require('./routes/auth.route');
const userRoute = require('./routes/user.route');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);

module.exports = app;