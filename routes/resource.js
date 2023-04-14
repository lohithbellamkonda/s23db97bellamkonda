var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var goat_controller = require('../controllers/goat');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// goat ROUTES ///
// POST request for creating a goat.
router.post('/goats', goat_controller.goat_create_post);
// DELETE request to delete goat.
router.delete('/goats/:id', goat_controller.goat_delete);
// PUT request to update goat.
router.put('/goats/:id', goat_controller.goat_update_put);
// GET request for one goat.
router.get('/goats/:id', goat_controller.goat_detail);
// GET request for list of all goat items.
router.get('/goats', goat_controller.goat_list);
module.exports = router;