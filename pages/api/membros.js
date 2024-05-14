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
        id: '76561198881983017',
        aniversario: '02/09',
        email: 'gabriel.silva.brandao7@gmail.com'
    },
    {
        nome: 'Dolly',
        id: '76561198441453389',
        aniversario: '10/11',
        email: 'vigasife@gmail.com'
    },
    {
        nome: 'Nikolas',
        id: '76561198841564068',
        aniversario: '02/12',
        email: 'nikolas.victor2@gmail.com'
    },
    {
        nome: 'Osmar',
        id: '76561198375973490',
        aniversario: '25/11',
        email: 'osmarcoelho25.oc@gmail.com'
    },
    {
        nome: 'Pedro',
        id: '76561198328504635',
        aniversario: '13/01',
        email: 'ppagbpedro@gmail.com'
    },
    {
        nome: 'Rúbia',
        id: '76561198318749985',
        aniversario: '02/03',
        email: 'rubia.a.m.souza@gmail.com'
    }
];

var membrosDados = [];

for (let i = 0; i < membros.length; i++) {

    let id = membros[i].id;

    var steamResponse = await fetch(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${accessKey}&steamids=${id}`);
    var steamResponseJSON = await steamResponse.json();

    membrosDados[i] = steamResponseJSON.response.players[0];
    membrosDados[i].nome = membros[i].nome;
    membrosDados[i].email = membros[i].email;
    membrosDados[i].aniversario = membros[i].aniversario;

}

// Resposta da API
res.json({
     dados: membrosDados
   });
}

export default handler;