var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

  //var monk = require('monk');
var url = 'mongodb://abcd:abcd@ds133428.mlab.com:33428/nodemail';
module.export.db = new Mongo().getDB(url);


    module.export.findAllDocs = function(db,callback){
  var collection = db.collection('user');
  collection.find({}).toArray(function(err,docs){
    assert.equal(err,null);
    console.log("found thee following doc");
    console.log(docs);
    callback(docs);
  });
}