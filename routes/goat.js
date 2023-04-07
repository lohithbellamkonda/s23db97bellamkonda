var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next)
 {
  res.render('goat', { title: 'Search Results goat' });
});

module.exports = router;