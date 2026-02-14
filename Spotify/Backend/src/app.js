const express = require('express');
const authRoutes = require('./routes/auth.route');
const musicRoutes = require('./routes/music.route');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Welcome to the Spotify World');
})

app.use('/api/auth', authRoutes);
app.use('/api/music', musicRoutes);

module.exports = app;