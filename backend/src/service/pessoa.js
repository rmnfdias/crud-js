const pessoa = require("../model/pessoa")
const ModelPessoas = require("../model/pessoa")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SALT = 12

//criando a classe ServicePessoas
class ServicesPessoas{
    async GetPessoas(){

        //fazer cerificações - ex. se mandou o nome
        return ModelPessoas.findAll()
    }
    async GetPessoaById(id){

        
        return ModelPessoas.findByPk(id)
    }
    async CreatePessoas(name, password, email){
        if(!name || !password || !email){
            throw new Error("Favor preencher todos os dados!")
        }
        //criptografar a senha aqui!
        const hashSenha = await bcrypt.hash(password, SALT)
        return ModelPessoas.create({name, password: hashSenha, email})
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
        pessoa.password = password ? await bcrypt.hash(password, SALT) : pessoa.password
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

    async Login(email, password){
    if(!email || !password){
        throw new Error ("Email ou senha inválidos")
        }

        const pessoa = await ModelPessoas.findOne({ where: { email }})

        if(!pessoa){
        throw new Error ("Email ou senha inválidos")
        }
        const senhaValida = bcrypt.compare(password, pessoa.password)
        if(!senhaValida){
            throw new Error ("Email ou senha inválidos")
        }
        return jwt.sign({ id: pessoa.id }, 'segredo', { expiresIn: 60 * 60})
    }
}

module.exports = new ServicesPessoas()