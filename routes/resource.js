var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Bank_controller = require('../controllers/Bank');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Bank ROUTES ///
// POST request for creating a Bank.
router.post('/Bank', Bank_controller.Bank_create_post);
// DELETE request to delete Bank.
router.delete('/Bank/:id', Bank_controller.Bank_delete);
// PUT request to update Bank.
router.put('/Bank/:id', Bank_controller.Bank_update_put);
// GET request for one Bank.
router.get('/Bank/:id', Bank_controller.Bank_detail);
// GET request for list of all Bank items.
router.get('/Bank', Bank_controller.Bank_list);
module.exports = router;

