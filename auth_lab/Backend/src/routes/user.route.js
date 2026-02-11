const express = require('express');

const router = express.Router();

router.get('/profile', (req, res) => {
  res.send('User Profile route is working! This route will be protected and will return user profile information.');
});




module.exports = router;