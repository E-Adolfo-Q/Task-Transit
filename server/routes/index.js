'use strict'

const  express = require('express');
const  routeCtrl = require('../controllers/')
const api = express.Router()

api.get('/route', routeCtrl.getRoutes)
api.get('/trips/:routeid',routeCtrl.getTrips)


module.exports = api;