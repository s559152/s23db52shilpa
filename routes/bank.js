var express = require('express');
const Bank_controlers= require('../controllers/Bank');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('Bank', { title: 'Search Results Bank' });
});*/
router.get('/', Bank_controlers.Bank_view_all_Page );
module.exports = router;
