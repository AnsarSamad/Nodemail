var express = require('express');
var router = express.Router();
console.log("am in login router");
router.post('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

module.exports = router;