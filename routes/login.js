var express = require('express');
var router = express.Router();
var mongo = require('./mongo.js');
console.log("am in login router");
router.use('/', function(req, res, next) {
console.log("am in login action router");
var db = mongo.db;
mongo.findAllDocs(db ,function(){
    db.close();
    res.render('home');
})

});

module.exports = router;