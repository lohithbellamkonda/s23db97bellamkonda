var express = require('express');
const goat_controlers= require('../controllers/goat');
var router = express.Router();

// A little function to check if we have an authorized user and continue on 
// or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET goat */
router.get('/', goat_controlers.goat_view_all_Page );

/* GET detail goat page */
router.get('/detail', goat_controlers.goat_view_one_Page);

/* GET create costume page */
router.get('/create',secured, goat_controlers.goat_create_Page);


/* GET create update page */
router.get('/update',secured, goat_controlers.goat_update_Page);
/* GET delete costume page */
router.get('/delete',secured, goat_controlers.goat_delete_Page);

module.exports = router;

