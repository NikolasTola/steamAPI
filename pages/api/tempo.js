import NextCors from 'nextjs-cors';

async function handler(req, res) {
   // Run the cors middleware
   // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
   await NextCors(req, res, {
      // Options
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: '*',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
   });

   // Rest of the API logic
   res.json({ message: 'Hello NextJs Cors!' });
}


async function tempo(request, response) {
      const dynamicDate = new Date();

      const steamResponse = await fetch("https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=2627FEB2EFFCED8437F659EB577291EE&steamids=76561198841564068");
      const steamResponseJSON = await steamResponse.json();
      const nome = steamResponseJSON.response.players[0].personaname;

      response.json({
        date: dynamicDate.toGMTString(),
        nome: nome,
        resposta: steamResponseJSON,
        teste: 'É o tola'
      });
}

export default handler;