
//const database = 'NEW_DATABASE_NAME';
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
db.cardapio.find({nome: "Macarrão"});

