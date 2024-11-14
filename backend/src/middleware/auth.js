const jwt = require ('jsonwebtoken')

function auth(req, res, next) {
    console.log('até aqui tudo certo')
    const token = req.headers['authorization']
    console.log(token)

    if(!token){
       return res.status(400).send({ msg: "Token não informado ou sem permissão"})
    }

    jwt.verify(token, "segredo", ( err, decoded) => {
        if (err){
            console.error('Erro ao decodificar',err)
            return res.status(400).send({ msg: "Token não informado ou sem permissão"})
        }

        console.log(decoded)
        req.session = decoded

        next()
    })

}

module.exports = auth;