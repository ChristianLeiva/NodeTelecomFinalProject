const articleModel = require('../../database/models/article.model')
const articleSchema = require('../../database/models/joiSchemas/article.schema')
const Joi = require('joi')


const getAllArticles = async(req, res) =>{
    try {
        const results = await articleModel.find()
        if(results.length === 0){
            return res.status(200).send("Empty database")
        }else{
            return res.status(200).send(results)
        }        
    } catch (error) {
        res.status(400).send({
            code: "Bad request",
            error
        })        
    }
}

const getAnArticlebyTitle = async(req, res) =>{
    try {
        const result = await articleModel.findOne({
            title : {$regex: '.*' + req.params.title + '.*', $options: '-i' }
        })        
        if(!result){
           return res.status(404).send("Article don't found")
        }else{
            return res.status(200).send(result )
        }
    } catch (error) {
        res.status(400).send({
            code: "Bad request",
            error
        })       
    }
}

const newArticle = async(req, res) =>{
    try {
        const user = req.userData
        let data = req.body
        data={
            ...data,
            userID: user._id
        }
        Joi.assert(data, articleSchema)
        const newArticle = new articleModel(data)
        await newArticle.save()
        res.status(200).send("Article created succefuly")   
    } catch (error) {
        res.status(400).send({
            code: "Bad request",
            error
        })         
    }

}

const updateArticle = async(req, res) =>{
    try {
        const user = req.userData
        const data = req.body
        const article = await articleModel.findById({_id : req.params.id})
        if(!article){
            return res.status(404).send("Article not found")
        }else{
            if(article.userID === user._id){
                await articleModel.updateOne(
                    {_id : req.params.id},
                    {
                    title: data.title,
                    description: data.description,
                    data: data.data,
                    image: data.image
                })
                return res.status(200).send("Article update succefuly")
            }else{
                return res.status(401).send("You dont have the permission neccesaries")
            }
        }        
    } catch (error) {
        res.status(400).send({
            code: "Bad request",
            error
        })       
    }
}

const deleteArticle = async(req, res) =>{
    try {
        const user = req.userData
        const article = await articleModel.findById({_id : req.params.id})
        if(article){
            if(article.userID === user._id){
                await articleModel.deleteOne({_id: req.params.id})
                res.status(200).send("Article deleted succefuly")

            }else{
                res.status(401).send("You dont have the permission neccesaries")
            }
        }else{
            res.status(404).send("Article not found")
        }        
    } catch (error) {
        res.status(400).send({
            code: "Bad request",
            error
        })
    }
}

module.exports = {
    getAllArticles,
    getAnArticlebyTitle,
    newArticle,
    updateArticle,
    deleteArticle
}