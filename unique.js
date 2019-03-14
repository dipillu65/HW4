/* Homework 4: MBTA Bus Data Collection & Mapping
Author: Dipo Doherty
Question 3: Find Unique MBTA IDs */


var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db3.json');
var db      = low(adapter);

var Ids = db.get('vehicles').map('id').value()
var distinctIds = [...new Set(Ids)]
var countIds = distinctIds.length
console.log(Ids)
console.log(distinctIds)
console.log(countIds)

