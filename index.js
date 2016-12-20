var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');

// db setup

// New Code



//const user = db.get('user');
//console.log("inserting new collection into user");
// user.insert({name: 'new',password:'test'})
//   .then((docs) => {
//     // docs contains the documents inserted with added **_id** fields
//     // Inserted 3 documents into the document collection
//   }).catch((err) => {
//     // An error happened while inserting
//   }).then(() => db.close())








app.get('/', function(request, response) {
  response.render('index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


var login = require('./routes/login');
app.use('/login', login);

/* adding HTML as the template view  */
var fs = require('fs') // this engine requires the fs module
app.engine('html', function (filePath, options, callback) { // define the template engine
  fs.readFile(filePath, function (err, content) {
    if (err) return callback(err)
    // this is an extremely simple template engine
    var rendered = content.toString().replace('#title#', '<title>' + options.title + '</title>')
    .replace('#message#', '<h1>' + options.message + '</h1>')
    return callback(null, rendered)
  })
})
//app.set('views', './views') // specify the views directory
app.set('view engine', 'html') // register the template engine



module.exports = app;