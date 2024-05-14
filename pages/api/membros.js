import NextCors from 'nextjs-cors';

async function handler(req, res) {
   // Run the cors middleware
   // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
   await NextCors(req, res, {
      // Options
      methods: ['GET'],
      origin: '*',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
});
/*
// Nikolas: 76561198841564068 V
// Pedro:   76561198328504635 V
// Brands:  76561198881983017 V
// Dolly:   76561198441453389 V
// Osmar:   76561198375973490 V
// Rúbia:   76561198318749985 V

const accessKey = process.env.ACCESS_KEY_SECRET;

const membros = [
    {
        nome: 'Brandão',
        id: '76561198881983017'
    },
    {
        nome: 'Dolly',
        id: '76561198441453389'
    },
    {
        nome: 'Nikolas',
        id: '76561198841564068'
    },
    {
        nome: 'Osmar',
        id: '76561198375973490'
    },
    {
        nome: 'Pedro',
        id: '76561198328504635'
    },
    {
        nome: 'Rúbia',
        id: '76561198318749985'
    }
];

var membrosDados = [];
*/
const steamResponse = await fetch("https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=2627FEB2EFFCED8437F659EB577291EE&steamids=76561198841564068");
const steamResponseJSON = await steamResponse.json();
const nome = steamResponseJSON.response.players[0].personaname;

// Resposta da API
res.json({
     nome: nome,
     resposta: steamResponseJSON,
     teste: 'É o tola'
   });
}

export default handler;