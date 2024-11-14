const express = require ('express')
const routers = require('./src/route/pessoa')
const database = require('./src/config/database')
const cors = requ ('cors')

//instaciar um express
const app = express()

//middleware json - aceita json no body
app.use(express.json()) 

app.use(cors())

//Adicionar as rotas ao express

app.use(routers)

//cria uma variavel com o número da porta.
const PORT = 3000

database.db
    .sync({force: false})
    .then((_) => {
        console.info("Banco conectado com sucesso")
        app.listen(PORT,() =>{
            console.info(`Servidor rodando na portar ${PORT}` )
        })
    })
    .catch((e)=>{
        console.error(`Não foi possivel conectar ${e}`)
    })

//inicializar o servidor
