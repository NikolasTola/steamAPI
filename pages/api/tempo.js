/*const cors = require('cors');

cors.header("origin", "*");
cors.header("Access-Control-Allow-Methods", "GET");

cors();
console.log('TESTE');*/

async function tempo(request, response) {
      const dynamicDate = new Date();

      const steamResponse = await fetch("https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=2627FEB2EFFCED8437F659EB577291EE&steamids=76561198841564068");
      const steamResponseJSON = await steamResponse.json();
      const nome = steamResponse.response.players.personaname;

      response.json({
        date: dynamicDate.toGMTString(),
        nome: nome,
        resposta: steamResponseJSON,
        teste: 'É o tola'
      })

}

export default tempo;