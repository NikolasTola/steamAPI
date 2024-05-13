const cors = require('cors');

cors.header("origin", "*");
cors.header("Access-Control-Allow-Methods", "GET");

cors();
console.log('TESTE');
function tempo(request, response) {
      const dynamicDate = new Date();

      response.json({
        date: dynamicDate.toGMTString()
      })
}

export default tempo;