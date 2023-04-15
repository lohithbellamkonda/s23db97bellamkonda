var express = require('express');
const goat_controlers= require('../controllers/goat');
var router = express.Router();
/* GET goats */
router.get('/', goat_controlers.goat_view_all_Page );
module.exports = router;

// GET request for one goat.
router.get('/goats/:id', goat_controlers.goat_detail);
