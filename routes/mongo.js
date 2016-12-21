var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

  //var monk = require('monk');
var url = 'mongodb://localhost:27017/nodemail';

var validate = function validateUser(user,callback){
  MongoClient.connect(url,function(err,db){
    console.log("validate user :"+user)
  var collection = db.collection('user');
    collection.findOne({'name':user} ,function(err,docs){
      assert.equal(err,null);
      console.log("found thee following doc");
      console.log(docs);
      callback(docs)
      
    });
  });

}
exports.validate = validate;

 //   module.export.findAllDocs = function(db,callback){
  
