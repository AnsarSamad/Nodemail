var express = require('express');
var router = express.Router();
var mongo = require('./mongo.js');
console.log("am in login router");
router.use('/', function(req, res, next) {
    mongo.validate(req.body.username,function(docs){
        console.log("validation result :"+docs)
        if(docs == null){
            res.send('Invalid Login')
        }else{
            res.render('home')
        }
  })
 

});

module.exports = router;