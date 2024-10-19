const ModelPessoas = require("../model/pessoa")
//criando a classe ServicePessoas
class ServicesPessoas{
    GetPessoas(){

        //fazer cerificações - ex. se mandou o nome
        return ModelPessoas.GetPessoas()
    }
    CreatePessoas(name){
        return ModelPessoas.CreatePessoas(name)
    }
    UpdatePessoas(id, name){
        return ModelPessoas.UpdatePessoas(id,name)
    }
    DeletePessoas(id){
        return ModelPessoas.DeletePessoas(id)
    }
}

module.exports = new ServicesPessoas()