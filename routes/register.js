var express = require('express');
var router = express.Router();
var mongo = require('./mongo.js');
console.log("am in register router");
router.use('/', function(req, res, next) {
    var password = req.body.password;
    var confPassword = req.body.confpassword;
    console.log("password :"+password+" , confirm password :"+confPassword)
    if(password == confPassword){
        mongo.register(req.body.username,req.body.email,password,function(){
                console.log("registration completed ")
                res.render('index');
        })
    }else{
        console.log("password and confirm password is not matched")
        res.send("password is not match")
    }
 
 

});

module.exports = router;