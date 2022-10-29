const userModel = require('../../database/models/user.model')
const Joi = require('joi')
const userSchema = require('../../database/models/joiSchemas/user.schema')



const jwt = require('jsonwebtoken')



const getAllUsers = async(req, res) =>{
    try {
        const users = await userModel.find()
        if(users.length === 0){
            return res.status(200).send("Empty database")
        }else{
            return res.status(200).send(users)
        }        
    } catch (error) {
        res.status(400).send({
            code: "bad request",
            error
        })        
    }
}

const getOneUser = async(req, res) =>{
    try {
        const Name =  req.params.name
        const result = await userModel.findOne({
            name: { $regex: '.*' + Name + '.*', $options: '-i' },
          })
        if(!result){
            return res.status(404).send("User not found")
        }else{
            return res.status(200).send(result)
        }        
    } catch (error) {
        res.status(400).send({
            code: "bad request",
            error
        })        
    }
}

const newUser = async(req, res) =>{
    try {
        const data = req.body
        Joi.assert(data, userSchema)
        const user = new userModel(data)
        await user.save()
        res.status(200).send({
            code: "ok",
            msg: "User created succefuly"
        })        
    } catch (error) {
        res.status(400).send({
            code: "bad request",
            error
        })        
    }
}

const updateUser = async(req, res) =>{
    try {
        const data = req.body
        const user = await userModel.findById({_id : req.params.id})
        if(!user){
            return res.status(404).send("User not found")
        }else{
            await userModel.updateOne(
                {_id : req.params.id },
                {
                name :  data.name,
                username: data.username,
                email: data.email,
                password: data.password
            })
            res.status(200).send("User update succefuly")
        }
    } catch (error) {
        res.status(500).send({
            code : "bad request",
            error
        })
    }
}

const deleteUser = async(req, res) =>{
    try {
        const user = await userModel.findById(req.params.id)
        if(!user){
            return  res.status(404).send("User not found")
        }else{
            await userModel.deleteOne({_id: req.params.id})
            return res.status(200).send("User deleted succefuly")
        }        
    } catch (error) {
        res.status(400).send({
            code : "Bad request",
            error: error
        })        
    }   
}

const login = async(req, res) =>{
    try {
        const user = await userModel.findOne({email: req.body.email})
        if(!user || user.password !== req.body.password){
            return res.status(404).send({
                code: "Bad request",
                error: "Invalid email or password"
            })
        }else{
            const payload = {
                user,
            }
            const token = jwt.sign(payload, process.env.KEY )

            return res.status(200).send({
                username: user.username,
                _id: user._id,
                token
            })
        }        
    } catch (error) {
        res.satus(400).send({
            code : "Bad request",
            error
        })
    }


}

module.exports = {
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
    newUser,
    login
}