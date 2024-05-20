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

// PRIMEIRA PARTE:
// Essa parte do código cria um objeto que possui o nome do membro e
// um array com o id de todos os jogos desse membro.
// Se o membro não tiver nenhum jogo ou estiver no modo "Visível só para amigos"
// a lista de jogos apresentará "Erro!"
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
];

var listaMembro_appId = [];

for (let i = 0; i < listaMembros.length; i++) {

   var id_api1 = listaMembros[i].id;

   var steamResponse_1 = await fetch(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${acessKey}&steamid=${id_api1}`);
   //var steamResponse_1 = await fetch(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=2627FEB2EFFCED8437F659EB577291EE&steamid=76561198841564068`);

   var steamResponseJSON_1 = await steamResponse_1.json();

   let objAux = {
      nome: '',
      idJogos: []
   }

   var listaJogos_id = steamResponseJSON_1.response.games;

   var jogos_id = [];

   objAux.nome = listaMembros[i].nome;

   if(steamResponseJSON_1.response.games != undefined){

      for (let j = 0; j < listaJogos_id.length; j++) {
         
         jogos_id[j] = listaJogos_id[j].appid;
      }

      objAux.idJogos =jogos_id;
   } else {

      jogos_id[0] = 'Erro!'; 
   }

   listaMembro_appId[i] = objAux;
   objAux.idJogos =jogos_id;
} 

// SEGUNDA PARTE:
var listaJogosOW = [];

var objetoAuxiliar = {
   nome: '',
   jogos: []
}

for (let i = 0; i < 15; i++) {

   //objetoAuxiliar.nome = listaMembros[i].nome

    var steamResponse_2 = await fetch(`https://store.steampowered.com/api/appdetails/?appids=359550`);
    var steamResponseJSON_2 = await steamResponse_2.json();

    console.log('Teste');
}
/*
//for (let i = 0; i < listaMembro_appId.length; i++) {

   objetoAuxiliar.nome = listaMembros[i].nome;

   for (let j = 0; j < listaMembro_appId[i].idJogos.length; j++) {
      
      

      var id_api2 = listaMembro_appId[i].idJogos[j];

      var steamResponse_2 = await fetch(`https://store.steampowered.com/api/appdetails/?appids=${id_api2}`);
      // var steamResponse_2 = await fetch(`https://store.steampowered.com/api/appdetails/?appids=359550`);
      var steamResponseJSON_2 = await steamResponse_2.json();

      //var dados = steamResponseJSON_2[id_api2].data;

      let objeto_intermediario = {
         nome: '',
         id: '',
         is_gratis: true,
         suporta_controle: true,
         imagem_1: '',
         imagem_2: '',
         link: '',
         num_players: ''
      }

      objeto_intermediario.nome = dados.name;
      objeto_intermediario.id = dados.steam_appid;
      objeto_intermediario.is_gratis = dados.is_free;
      objeto_intermediario.imagem_1 = dados.header_image;
      objeto_intermediario.imagem_2 = dados.capsule_image;
      objeto_intermediario.link = `https://store.steampowered.com/app/${id_api2}`;
      
      if(dados.controller_support != undefined){
         objeto_intermediario.suporta_controle = true;
      } else {
         objeto_intermediario.suporta_controle = false;
      }

      let categorias = dados.categories;

      categorias.forEach(categoria => {
         
         if(categoria.id = 2){
            objeto_intermediario.num_players = categoria.description;
         }

         if (categoria.id = 1) {
            objeto_intermediario.num_players = categoria.description;
         }
      });

      objAux.jogos[j] = objeto_intermediario;
   }

   //listaJogosOW[i] = objAux;
//}
   
*/

// Resposta da API
res.json({
      id: steamResponseJSON_2
   });
}

export default carregaJogos;