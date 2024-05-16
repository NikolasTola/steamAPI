import NextCors from 'nextjs-cors';

async function carregaJogos(req, res) {
   // Run the cors middleware
   // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
   await NextCors(req, res, {
      // Options
      methods: ['GET'],
      origin: '*',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
});

const acessKey = ACCESS_KEY_SECRET;

const id = '76561198841564068';


var steamResponse = await fetch(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=2627FEB2EFFCED8437F659EB577291EE&steamid=76561198841564068&format=json`);
var steamResponseJSON = await steamResponse.json();

var steamResponse2 = await fetch(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${acessKey}&steamid=${id}&format=json`);
var steamResponse2JSON = await steamResponse2.json();

// Resposta da API
res.json({
      jogos: steamResponseJSON,
      jogos2: steamResponse2JSON
   });
}

export default carregaJogos;