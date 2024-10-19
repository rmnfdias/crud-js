const ServicePessoas = require ('../service/pessoa')

//criando controller da pessoa
class ControllerPessoas{
    //todas as funções do controller recebem req e res
    GetPessoas(req, res){
        //todas as funções do controler tem Trycatch
        try {
            const pessoas = ServicePessoas.GetPessoas()
            res.send({msg: pessoas})
            
        } catch (error) {
            //todo o catch vai ser assim, mas nem sempre será assim...
            res.status(500).send({msg: error.message})            
        }

    }
    CreatePessoa(req, res){
        //todas as funções do controler tem Trycatch
        try {
            const name = req.body.name
            const pessoas = ServicePessoas.CreatePessoas(name)
            
            res.send({msg: pessoas})

            } catch (error) {
            //todo o catch vai ser assim, mas nem sempre será assim...
            res.status(500).send({msg: error.message})            
            }
    }
    UpdatePessoa(req, res){
        //todas as funções do controler tem Trycatch
        try {const name = req.body.name
            const id = req.params.id
            const pessoas = ServicePessoas.UpdatePessoas(id, name)
            
            res.send({msg: pessoas})

            } catch (error) {
            //todo o catch vai ser assim, mas nem sempre será assim...
            res.status(500).send({msg: error.message})            
            }
    }
    DeletePessoa(req, res){
        //todas as funções do controler tem Trycatch
        try {
            const id = req.params.id
            const pessoas = ServicePessoas.DeletePessoas(id)
            
            res.send({msg: pessoas})
            } catch (error) {
            //todo o catch vai ser assim, mas nem sempre será assim...
            res.status(500).send({msg: error.message})            
            }
    }

}

module.exports = new ControllerPessoas()