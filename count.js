/* Homework 4: MBTA Bus Data Collection & Mapping
Author: Dipo Doherty
Question 2: Find the number of vehicle entries in MBTA json database */


var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);


//Get the number of vehicles values in db
var Number = db.get('vehicles').size().value()

//Print number of vehicle entries
  console.log(Number)