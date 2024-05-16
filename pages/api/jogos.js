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
      id: '76561198841564068'//'76561198318749985'
   }
];

let indice = 0;
var jogosID = [{}];



for (let i = 0; i < listaMembros.length; i++) {

   var id = listaMembros[i].id;

   var steamResponse = await fetch(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${acessKey}&steamid=${id}`);
   //var steamResponse = await fetch(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=2627FEB2EFFCED8437F659EB577291EE&steamid=76561198841564068`);

   var steamResponseJSON = await steamResponse.json();

   let ids = steamResponseJSON.response.games;

   ids = ids[0];

   /*for (let j = 0; j < steamResponseJSON.response.games.length; j++) {
      
      //ids[j] = steamResponseJSON.response.games[j].appid;
      
   }*/
   
   let arrayAux = [];


   let objAux = {
      nome: listaMembros[i].nome,
      idJogos: ids
   }

   //lista_jogosID[i].nome = listaMembros.nome;

   jogosID[i] = objAux;
}
   
//jogosID[indice] = steamResponseJSON;
//jogosID[indice].nome = 'ZECA';
   

// Resposta da API
res.json({
      id: jogosID
      //dados: steamResponseJSON   
   });
}

export default carregaJogos;