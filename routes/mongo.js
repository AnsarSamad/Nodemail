var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

  //var monk = require('monk');
//var url = 'mongodb://localhost:27017/nodemail';
var url = 'mongodb://abcd:abcd@ds133428.mlab.com:33428/nodemail';

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

var register = function register(username,email,password,callback){
  MongoClient.connect(url,function(err,db){
  db.collection('user').insertOne({name:username,email:email,password:password},function(err,resul){
    assert.equal(err, null);
    console.log("Inserted a document into the user collection."+resul);
    callback();
  })
  });
}

exports.validate = validate;
exports.register = register;

 //   module.export.findAllDocs = function(db,callback){
  
