var express = require('express');
const Bank_controlers= require('../controllers/Bank');
var router = express.Router();

const secured = (req, res, next) => {
  if (req.user){
  return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
  }
/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('Bank', { title: 'Search Results Bank' });
});*/
router.get('/', Bank_controlers.Bank_view_all_Page );
router.get('/Bank/:id', Bank_controlers.Bank_detail);
router.get('/detail', Bank_controlers.Bank_view_one_Page);
router.get('/create',secured, Bank_controlers.Bank_create_Page);
router.get('/update', Bank_controlers.Bank_update_Page);
router.get('/delete',secured, Bank_controlers.Bank_delete_Page);
router.get('/update',secured, Bank_controlers.Bank_update_Page);
router.get('/update', secured,Bank_controlers.Bank_update_Page);

module.exports = router;
