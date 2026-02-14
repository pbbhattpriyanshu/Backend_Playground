const express = require('express');
const { signup, login, logout } = require('../controllers/auth.controller');
const router = express.Router();
const { authUser } = require('../middlewares/auth.middleware');

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', authUser, logout);



module.exports = router;