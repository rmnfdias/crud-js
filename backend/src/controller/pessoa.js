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
    async GetSession(req, res){
        
        try {
            const id = req.sesssion.id
            const pessoas = await ServicePessoas.GetPessoaById(id)
            res.send({msg: pessoas})
            
        } catch (error) {
            //todo o catch vai ser assim, mas nem sempre será assim...
            res.status(500).send({msg: error.message})            
        }
    }
    async CreatePessoa(req, res){
        //todas as funções do controler tem Try catch
        try {
            // const name = req.body.name
            // const password = req.body.password
            // const email = req.body.email
            const {name, password, email} = req.body
            //pode ser usado os dois tipo, porém geralmente a segunda opção é mais bem quista 
            
            const pessoas = await ServicePessoas.CreatePessoas(name, password, email)
            
            res.send({msg: pessoas})

            } catch (error) {
            //todo o catch vai ser assim, mas nem sempre será assim...
            res.status(500).send({msg: error.message})            
            }
    }
    async UpdatePessoa(req, res){
        //todas as funções do controler tem Trycatch
        try {
            const id = req.params.id
            const name = req.body.name
            const password = req.params.password
            const email = req.params.email
            const pessoas = await ServicePessoas.UpdatePessoas(id, name, password, email)
            
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
            await ServicePessoas.DeletePessoas(id)
            res.status(204).send()
            
            res.send({msg: pessoas})
            } catch (error) {
            //todo o catch vai ser assim, mas nem sempre será assim...
            //res.status(500).send({msg: error.message})            
            }
    }

    async Login(req, res){
        try {
            const {email, password} = req.body
            const token = await ServicePessoas.Login(email, password)
            res.status(200).send({ token })
           
            } catch (error) {
                res.status(500).send({msg: error.message})  
    }

}
}

module.exports = new ControllerPessoas()