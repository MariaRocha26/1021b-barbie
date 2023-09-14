
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



/*use("teretreino");
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
)*/


/////////// Atividade 1 ///////////////
use("db_patissier");
db.createCollection("cake");

/////////// Atividade 2 ///////////////
use("db_patissier");
db.cake.insertOne(
    {
        _id: ObjectId ("111111111111"),
        nome: "Bolo de Fubá",
        peso: "1,5 kg",
        preco: "50 reais",
        ingredientes:[
            {
                nome:"Ovos",
                quantidade: "3"
            },
            {
                nome:"Fubá",
                quantidade: "2 xícaras (chá)"
            },
            {
                nome:"Óleo",
                quantidade: "1/2 copo (americano)"
            },
            {
                nome:"Fermento em pó",
                quantidade: "1 colher (sopa)"
            },
            {
                nome:"Açúcar",
                quantidade: "2 xícaras (chá)"
            },
            {
                nome:"Farinha de trigo",
                quantidade: "3 colheres (sopa) rasas"
            },  
            {
                nome:"Leite",
                quantidade: "1 copo"
            }
        ]
    }
)

db.cake.insertOne(
    {
        _id: ObjectId ("222222222222"),
        nome: "Bolo de Chocolate",
        peso: "2 kg",
        preco: "80 reais",
        ingredientes:[
            {
                nome:"Ovos",
                quantidade: "4"
            },
            {
                nome:"Chocolate em pó",
                quantidade: "4 colheres (sopa)"
            },
            {
                nome:"Manteiga",
                quantidade: "2 colheres"
            },
            {
                nome:"Fermento em pó",
                quantidade: "2 colheres (sopa)"
            },
            {
                nome:"Açúcar",
                quantidade: "2 xícaras (chá) de açúcar"
            },
            {
                nome:"Farinha de trigo",
                quantidade: "3 xícaras (chá)"
            },  
            {
                nome:"Leite",
                quantidade: "1 xícara (chá)"
            }
        ]
    }
)

db.cake.insertOne(
    {
        _id: ObjectId ("333333333333"),
        nome: "Bolo de Limão",
        peso: "2,5 kg",
        preco: "90 reais",
        ingredientes:[
            {
                nome:"Ovos",
                quantidade: "2 (claras em neve)"
            },
            {
                nome:"Limão",
                quantidade: "suco de 1 ou 2 limões (depende do tamanho)"
            },
            {
                nome:"Manteiga",
                quantidade: "2 colheres"
            },
            {
                nome:"Fermento em pó",
                quantidade: "2 colheres (sopa)"
            },
            {
                nome:"Açúcar",
                quantidade: "1 e 1/2 xícara"
            },
            {
                nome:"Farinha de trigo",
                quantidade: "3 e ¹/2 xícaras"
            },  
            {
                nome:"Leite",
                quantidade: "1 xícara (chá)"
            }
        ]
    }
)

db.cake.insertOne(
    {
        _id: ObjectId ("444444444444"),
        nome: "Bolo de Red Velvet",
        peso: "3 kg",
        preco: "150 reais",
        ingredientes:[
            {
                nome:"Ovos",
                quantidade: "4"
            },
            {
                nome:"Chocolate em pó",
                quantidade: "2 e 1/2 colheres (sopa)"
            },
            {
                nome:"Manteiga",
                quantidade: "3 colheres (sopa)"
            },
            {
                nome:"Fermento em pó",
                quantidade: "2 colheres (sopa)"
            },
            {
                nome:"Açúcar",
                quantidade: "1 e 1/4 de xícara"
            },
            {
                nome:"Farinha de trigo",
                quantidade: "1 xícara e 1/2 colher (sopa)"
            },  
            {
                nome:"Leite",
                quantidade: "100 ml de leite aquecido"
            },
            {
                nome:"Vinagre branco",
                quantidade: "1/2 colher (chá)"
            },
            {
                nome:"Corante vermelho em gel",
                quantidade: "1 e 1/2 colher (sopa)"
            }
        ]
    }
)

/////////// Atividade 3 ///////////////
use("db_patissier");
db.cake.deleteOne({_id:ObjectId("111111111111")});


/////////// Atividade 4 ///////////////










