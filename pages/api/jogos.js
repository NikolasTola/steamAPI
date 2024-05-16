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

const chaveAcesso = ACCESS_KEY_SECRET;

const id = '76561198841564068';

var steamResponse = await fetch(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${chaveAcesso}&steamid=${id}&format=json`);
//var steamResponse = await fetch(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=2627FEB2EFFCED8437F659EB577291EE&steamid=76561198841564068&format=json`);
var steamResponseJSON = await steamResponse.json();

// Resposta da API
res.json({
      jogos: steamResponseJSON
   });
}

export default carregaJogos;