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

   const accessKey = process.env.ACCESS_KEY_SECRET;

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

  var lista_ids = [{
      nome: '',
      jogos_id: []
  }];

 for (let i = 0; i < listaMembros.length; i++) {
   var id = listaMembros[0].id;
   var steamResponse = await fetch(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${accessKey}&steamid=${id}&format=json`);
   var steamResponseJSON = await steamResponse.json();

   let listaMeusJogos = steamResponseJSON.response.games;

   lista_ids[i].nome = listaMembros[i].nome;
 }
  // lista_ids[i].nome = listaMembros[i].nome;

  /* for (let j = 0; j < listaMeusJogos.length; j++) {
      
      lista_ids[i].jogos_id[j] = listaMeusJogos[j].appid;
      
   //

  }*/
   //var steamResponse = await fetch(`https://store.steampowered.com/api/appdetails/?appids=359550`);
   //var steamResponseJSON = await steamResponse.json();



// Resposta da API
res.json({
      jogos: listaMeusJogos
   });
}

export default carregaJogos;