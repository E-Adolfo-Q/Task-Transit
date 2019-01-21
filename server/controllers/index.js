'use strict'
const Route = require('../models/route');
const Trips = require('../models/trips');

function getRoutes (req,res){ 
  Route.find({},(err, routes) => {       
    if (err) return res.status(500).send({message:`Error al realizar la petición ${err}`})
    if (!routes) return res.status(404).send({message:'No existe la routes'})
    res.status(200).send({ routes })
 })
}  
 function getTrips(req,res){  
  let routeid = req.params.routeid  
  Trips.find({route_id : routeid},(err, trips) => {     
    if (err) return res.status(500).send({message:`Error al realizar la petición ${err}`})
    if (!trips) return res.status(404).send({message:'No existe'})
    res.status(200).send({ trips })
 })
  
  /*Trips.find(query)
  .populate('route').exec((err, trips) => {    
    res.status(200).send({ trips })
   })*/
 }

module.exports = {
  getRoutes, 
  getTrips
}