const jwt = require('jsonwebtoken')
const {verifyToken} = require('../helpers/verifyToken')

const verifyIsLogged = (req, res, next ) =>{
    const token = verifyToken( req )
    if(token){
        try {
            let decodedToken = jwt.verify(token, process.env.KEY)
    
            if(decodedToken){
                const {user} = decodedToken
                req.userData = user
                next()
            }else{
                res.send("pase por aca user.middleware verifiyisLogged ")
            }        
        } catch (error) {
            res.status(400).send({
                code: "Bad request",
                error
            })        
        }
    }else{
        return res.status(400).json({
            msg: 'The request does not have a token'
        })
    }
}

const verifyIsCreator = async(req, res, next) =>{
    const token = verifyToken( req )
    if(token){
        try {
            let decodedToken = jwt.verify(token, process.env.KEY)
    
            if(decodedToken){
                const {user} = decodedToken
                req.userData = user
                next()
            }else{
                res.send("pase por aca user.middleware verifiyIsCreator ")
            }        
        } catch (error) {
            res.status(400).send({
                code: "Bad request",
                error
            })        
        }
    }else{
        return res.status(400).json({
            msg: 'The request does not have a token'
        })
    }




}

module.exports = {
    verifyIsLogged,
    verifyIsCreator
}