'use strict';

const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const ShapeSchema = Schema({
    _id: Schema.Types.ObjectId,      
    shape_id     : String,
    shape_pt_lat : Number,   
    shape_pt_lon : Number,
    shape_pt_lon : Number 
});

module.exports = mongoose.model('Shape',ShapeSchema);