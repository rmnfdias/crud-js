const express = require ('express')
const routers = require('./src/route/pessoa')

//instaciar um express
const app = express()

//middleware json - aceita json no body
app.use(express.json()) 

//Adicionar as rotas ao express

app.use(routers)

//cria uma variavel com o número da porta.
const PORT = 3000
//inicializar o servidor
app.listen(PORT,() =>{
    console.info(`Servidor rodando na portar ${PORT}` )
})