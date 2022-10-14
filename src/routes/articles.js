const express = require('express')
const router = express.Router()
const {getAllArticles, newArticle , updateArticle, deleteArticle} = require('../controllers/articleController')
const {verifyIsLogged, verifyIsCreator} =  require('../middleware/user.middleware')

router.get('/', getAllArticles)

router.post('/', verifyIsLogged, newArticle)

router.put('/:id', verifyIsCreator, updateArticle  )

router.delete('/:id', verifyIsCreator, deleteArticle )

module.exports = router