const express = require('express')
const ControllerPessoas = require("../controller/pessoa")
const auth = require('../middleware/auth')
//inicializando as rota do express

const router = express.Router()

//criando as rotas

router.post('/', ControllerPessoas.CreatePessoa)
router.post('/login', ControllerPessoas.Login)
router.get('/', auth , ControllerPessoas.GetPessoas)
router.put('/:id',auth , ControllerPessoas.UpdatePessoa)
router.delete('/:id', auth , ControllerPessoas.DeletePessoa)

//Exportar as rotas
module.exports = router