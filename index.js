var express  = require('express');
var app      = express();
var getData = require('./getData.js');
var low      = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter  = new FileSync('db.json');
var db       = low(adapter);
 
// Declare vehicles array
db.defaults({ vehicles: [] }).write()
  
app.get('/add/:length', function(req,res){
    // ------------------------------------------
    //  YOUR CODE
    //  create length new users, add to db
    //  var user = createUser();
    //  
    //  return number of new users
    // ------------------------------------------
});

app.get('/', function(req,res){
    res.send(db.get('users').value());
});

app.listen(3000,function(){
    console.log('Server running on port: ' + 3000);
})