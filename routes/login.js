var express = require('express');
var router = express.Router();
var mongo = require('./mongo.js');
console.log("am in login router");
router.use('/', function(req, res, next) {
    mongo.validate(req.body.user,function(docs){
        console.log("validation result :"+docs)
        if(docs == null){
            res.render('error')
        }else{
            res.render('home')
        }
  })
 

});

module.exports = router;