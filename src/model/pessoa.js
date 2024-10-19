const nomes = new Array("Ana", "Sebastião")

//criando a classe ModelPessoas
class ModelPessoas{
    GetPessoas(){
        return nomes
    }
    CreatePessoas(name){
        return nomes.push(name)
    }
    UpdatePessoas(id, name){
        return nomes[id] = name
    }
    DeletePessoas(id){
        return nomes.splice(id, 1)
    }
}

module.exports = new ModelPessoas()