'use strict';

const  MongoClient  = require('mongoose'); 
const  app = require('./app')
const config = require('./config')

MongoClient.connect(config.db,{ useNewUrlParser: true }, (err,res) => {
  if(err){
    return console.log(`Error a conectar a la base de datos${err}`);
  }
  console.log('Conexión a la base de datos establecida....');
  app.listen(config.port, () => {
  console.log(`API REST corriendo en http://localhost:${config.port}`);
 });
});

