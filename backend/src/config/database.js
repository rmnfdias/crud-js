//configurar o banco
//utilizando o sequelize
const {Sequelize} = require ('sequelize')

class Database {
    constructor(){
        this.init()
    }
    init(){
        this.db = new Sequelize({
            //para conexeão com qualquer banco as informações abaixo são as mesmas
            database: 'exemplo', 
            host: 'localhost',
            username: 'root',
            dialect: 'mysql',
            password: ''
            
        })
    }
}

module.exports = new Database();