const ServicePessoas = require ('../service/pessoa')

//criando controller da pessoa
class ControllerPessoas{
    //todas as funções do controller recebem req e res
    async GetPessoas(req, res){
        //todas as funções do controler tem Trycatch
        try {
            const pessoas = await ServicePessoas.GetPessoas()
            res.send({msg: pessoas})
            
        } catch (error) {
            //todo o catch vai ser assim, mas nem sempre será assim...
            res.status(500).send({msg: error.message})            
        }

    }
    async CreatePessoa(req, res){
        //todas as funções do controler tem Trycatch
        try {
            const name = req.body.name
            const pessoas = await ServicePessoas.CreatePessoas(name)
            
            res.send({msg: pessoas})

            } catch (error) {
            //todo o catch vai ser assim, mas nem sempre será assim...
            res.status(500).send({msg: error.message})            
            }
    }
    async UpdatePessoa(req, res){
        //todas as funções do controler tem Trycatch
        try {const name = req.body.name
            const id = req.params.id
            const pessoas = await ServicePessoas.UpdatePessoas(id, name)
            
            res.send({msg: pessoas})

            } catch (error) {
            //todo o catch vai ser assim, mas nem sempre será assim...
            res.status(500).send({msg: error.message})            
            }
    }
    async DeletePessoa(req, res){
        //todas as funções do controler tem Trycatch
        try {
            const id = req.params.id
            const pessoas = await ServicePessoas.DeletePessoas(id)
            
            res.send({msg: pessoas})
            } catch (error) {
            //todo o catch vai ser assim, mas nem sempre será assim...
            res.status(500).send({msg: error.message})            
            }
    }

}

module.exports = new ControllerPessoas()