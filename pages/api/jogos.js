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

const acessKey = process.env.ACCESS_KEY_SECRET;

const listaMembros = [
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
]

const id = listaMembros[2].id;

var steamResponse = await fetch(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${acessKey}&steamid=${id}&format=json`);
//var steamResponse = await fetch(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=2627FEB2EFFCED8437F659EB577291EE&steamid=76561198841564068&format=json`);

var steamResponseJSON = await steamResponse.json();

// Resposta da API
res.json({
      id: id,
      dados: steamResponseJSON   
   });
}

export default carregaJogos;