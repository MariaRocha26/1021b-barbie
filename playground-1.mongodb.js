
/*//const database = 'NEW_DATABASE_NAME';
//const collection = 'NEW_COLLECTION_NAME';

//CREATE DATABASE TEST
//USE TEST
use("test");

//APAGANDO A COLLECTION ANTES DE INSERIR NOVOS DADOS
db.cardapio.drop()

//CREATE TABLE => createCollection
db.createCollection("cardapio");

db.cardapio.insertMany([
    {nome: "Macarrão", preco: 29.99, ingredientes: "macarrão, molho, queijo, carne"},
    {nome: "Strogonoff", preco: 39.99, ingredientes: "carne, arroz, queijo, batata palha"},
    {nome: "Pure de batata", preco: 19.99, ingredientes: "batata amassada com leite, manteiga, queijo"},
    {nome: "Lasanha", preco: 49.99, ingredientes: "carne moída, massa, presunto, mussarela"}
])

//SELECT * FROM test.cardapio

//No mongo para selecionar vamos usar o comando find
db.cardapio.find();

//filtrando pelo nome
db.cardapio.find({nome: "Macarrão"});*/



use("teretreino");
db.createCollection("treino");

db.treino.insertOne(
    {
        nome:"Superiores e cardio",
        diaSemana:["Segunda"],
        exercicios:[
            {
                nome:"Supino",
                serie: 4,
                repeticoes: 15
            },
            {
                nome:"Rosca Martelo",
                serie:4,
                repeticoes:15
            },
            {
                nome:"Pack deck",
                serie:4,
                repeticoes:15
            },
            {
                nome:"Voador",
                serie:4,
                repeticoes:15
            },
            {
                nome:"Rosca Scott",
                serie:4,
                repeticoes:15
            }
        ]
    }
)
db.treino.insertOne(
    {
        nome:"Costas e Triceps",
        diaSemana:["Quarta"],
        exercicios:[
            {
                nome:"Triceps Polia",
                serie: 4,
                repeticoes: 15
            },
            {
                nome:"Triceps Corda",
                serie:4,
                repeticoes:15
            },
            {
                nome:"Remada Curvada",
                serie:4,
                repeticoes:15
            },
            {
                nome:"Puxada Alta",
                serie:4,
                repeticoes:15
            },
            {
                nome:"Remada Baixa",
                serie:4,
                repeticoes:15
            }
        ]
    }
)

db.treino.insertOne(
    {
        nome:"Inferiores",
        diaSemana:["Terca e Quinta"],
        exercicios:[
            {
                nome:"Leg Press",
                serie: 4,
                repeticoes: 12
            },
            {
                nome:"Agachamento",
                serie:4,
                repeticoes:12
            },
            {
                nome:"Levantamento Terra",
                serie:4,
                repeticoes:12
            },
            {
                nome:"Cadeira Extensora",
                serie:4,
                repeticoes:15
            },
            {
                nome:"Cadeira Abdutora",
                serie:4,
                repeticoes:15
            },
            {
                nome:"Cadeira Adutora",
                serie:4,
                repeticoes:15
            }
        ]
    }
)

use("teretreino");
db.treino.find({_id:ObjectId("64f741dd17af774ae34adea0")})

use("teretreino");
db.treino.updateOne(
    {_id:ObjectId("64f741dd17af774ae34adea0")}, {$set: {diaSemana: "Sexta", nome: "Peito e Biceps A"}}
)

use("teretreino");
db.treino.updateOne(
    {_id:ObjectId("64f741dd17af774ae34adea0"), "exercicios.nome": "Rosca Scott"}, 
    {$set: {"exercicios.$.serie": "5", "exercicios.$.repeticoes": "12"}}
)








