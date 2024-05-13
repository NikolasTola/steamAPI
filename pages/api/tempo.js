var express = require('express')
var cors = require('cors')
var app = express()
 
console.log(cors);
console.log(cors.origin)
app.use((req, res, next) =>{
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET', 'PUT');
  console.log(req.header('origin'));

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