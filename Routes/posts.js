const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const auth_m = require('../middleware/auth_m');

router.route('/posts').get((req, res) => {
  res.send('posts route..');
});

module.exports = router;
