const express = require('express')
const ControllerPessoas = require("../controller/pessoa")

//inicializando as rota do express

const router = express.Router()

//criando as rotas

router.get('/', ControllerPessoas.GetPessoas)
router.post('/', ControllerPessoas.CreatePessoa)
router.put('/:id', ControllerPessoas.UpdatePessoa)
router.delete('/:id', ControllerPessoas.DeletePessoa)

//Exportar as rotas
module.exports = router