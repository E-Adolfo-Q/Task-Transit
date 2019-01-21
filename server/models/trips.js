'use strict';

const mongoose = require('mongoose')
const Schema   = mongoose.Schema;

const TripSchema = Schema({   
    route_id      : String,
    service_id    : String, 
    trip_id       : String,    
    trip_headsign : String,   
    direction_id  : Number,
    shape         : { type: Schema.Types.ObjectId, ref: 'Shape'}  
});

module.exports = mongoose.model('Trip',TripSchema);