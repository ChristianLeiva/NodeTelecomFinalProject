const verifyToken = (req) => {
    let token = req.headers['authorization'] || false

    if(!token)  return false
    // return res.status(403).send('Token invalido o inexistente')
    
    if (token && token.toLowerCase().startsWith('bearer')) {
        token = token.substring(7)
    }

    return token

}


module.exports = {
    verifyToken
}