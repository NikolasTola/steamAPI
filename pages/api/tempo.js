const cors = require('cors');

cors.header("Access-Control-Allow-Origin", "orange-wall.vercel.app");
cors.header("Access-Control-Allow-Methods", "GET");

function tempo(request, response) {
      const dynamicDate = new Date();

      response.json({
        date: dynamicDate.toGMTString()
      })
}

export default tempo;