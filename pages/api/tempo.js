var express = require('express')
var cors = require('cors')
var app = express()
 
app.use((req, res, next) =>{
  res.header('origin', '*');
  res.header('methods', 'GET');

  app.use(cors());

  next();
});
//-----------------------------

function tempo(request, response) {
      const dynamicDate = new Date();

      response.json({
        date: dynamicDate.toGMTString()
      })
}

export default tempo;