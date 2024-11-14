//const nomes = new Array("Ana", "Sebastião")
const database = require ('../config/database')
//criando a classe ModelPessoas

class ModelPessoas{
    constructor(){
        this.model = database.db.define('pessoas', {
            id: {
                type: database.db.Sequelize.INTEGER,
                //INTEGER PARA NÚMEROS!!
                primaryKey: true,
                autoIncrement: true,
            },
            name:{
                type: database.db.Sequelize.STRING

            },
            email:{
                type: database.db.Sequelize.STRING,
                unique: true
            },
            password:{
                type: database.db.Sequelize.STRING
            }
        });
    }


//     GetPessoas(){
//         return nomes
//     }
//     CreatePessoas(name, age, race){
//         return nomes.push(name,age,race)
//     }
//     UpdatePessoas(id, name){
//         return nomes[id] = name
//     }
//     DeletePessoas(id){
//         return nomes.splice(id, 1)
//     }
}

module.exports = new ModelPessoas().model