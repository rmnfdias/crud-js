const ModelPessoas = require("../model/pessoa")
//criando a classe ServicePessoas
class ServicesPessoas{
    async GetPessoas(){

        //fazer cerificações - ex. se mandou o nome
        return ModelPessoas.findAll()
    }
    async CreatePessoas(name, password, email){
        if(!name || !password || !email){
            throw new Error("Favor preencher todos os dados!")
        }
        return ModelPessoas.create({name, password, email})
    }
    async UpdatePessoas(id, name, password, email){
        if(!id){
            throw new Error("Favor informar ID")
        }
        const pessoa = await ModelPessoas.findByPk(id)
        if(!pessoa){
            throw new Error("Pessoa não encontrada!")
        }
        pessoa.name = name || pessoa.name
        pessoa.password = password || pessoa.password
        pessoa.email = email || pessoa.email
        
        pessoa.save()
        return pessoa
        //return ModelPessoas.update({name , password, email}, {where:{ id }})
    }
    async DeletePessoas(id){
        if(!id){
            throw new Error("Favor informar ID")
        }
        const pessoa = await ModelPessoas.findByPk(id)
        if(!pessoa){
            throw new Error("Pessoa não encontrada!")
        }
        
        return pessoa.destroy

       // return ModelPessoas.destroy( { where: { id } } )
    }
}

module.exports = new ServicesPessoas()