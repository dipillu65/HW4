/* Homework 4: MBTA Bus Data Collection & Mapping
Author: Dipo Doherty
Question 1: Write MBTA bus data to bd.json file */



var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);
var fetch = require('node-fetch');
var data = []
var url = "https://api-v3.mbta.com/vehicles?api_key=dd61a37a76fe444aa485740f28250656&filter[route]=1&include=trip"

// init the data store
db.defaults({ vehicles: []}).write();

async function fetchData(){
    fetch(url)
        .then(res => res.json())
        .then(json => {
        data = json.data;
        return data;
    })
}

async function Populate(){
    await fetchData()
    console.log('Populate called')
    console.log(JSON.stringify(data))
    data.forEach(newVehicle);
}

var newVehicle = function (data){
    var vehicle = {
        id : data.id,
        label : data.attributes.id,
        direction_id : data.attributes.direction_id,
        latitude : data.attributes.latitude,
        longitude : data.attributes.longitude
    }
    //Add post to db
    db.get('vehicles')
    .push(vehicle)
    .write();
}

//assign start time the first time
var startTime = new Date().getTime() 
var timeID = setInterval(function(){

    console.log('Timer called')
    if(new Date().getTime() - startTime > 5000){
        clearInterval(timeID);
        console.log('Time stopped')
    }
    //Call function to fetch data & populate db (After if func. is validated)
    Populate();

},1000);

//read post
//console.log(db.get('vehicles').value())