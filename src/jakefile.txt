//Crie um banco de dados chamado mypet no MONGODB :D
use("mypet");

//Crie uma collection chamada dono 
db.createCollection("dono");

//3. Crie as colunas na `collection dono`: `_id` `nome` `idade` `animal` 
    //a. Na coluna `animal`, adicione as informações do: `_id` `nome` `valor` `raca`
    db.dono.insertOne(
      {_id:1, 
      nome:"Otavio Felippi",
      idade:"17 anos",
      animal:"cachorro"
          [
              {_id:1,nome:"Frederico", valor:200, raca:"Pinscher"}
          ]
      }
  )

