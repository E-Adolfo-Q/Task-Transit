'use strict';

const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const RouteSchema = Schema({    
    route_id : String,
    agency_id: String,   
    route_short_name : String,
    route_long_name: String,
    route_desc: Number,
    route_type: {type: Number, default:0},
    route_url:String,      
    route_color : String,
    route_text_color : String
});

module.exports = mongoose.model('Route',RouteSchema);