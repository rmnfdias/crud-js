const ModelPessoas = require("../model/pessoa")
//criando a classe ServicePessoas
class ServicesPessoas{
    async GetPessoas(){

        //fazer cerificações - ex. se mandou o nome
        return ModelPessoas.findAll()
    }
    async CreatePessoas(name){
        return ModelPessoas.CreatePessoas(name)
    }
    async UpdatePessoas(id, name){
        return ModelPessoas.UpdatePessoas(id,name)
    }
    async DeletePessoas(id){
        return ModelPessoas.DeletePessoas(id)
    }
}

module.exports = new ServicesPessoas()