const express = require('express')
const router = express.Router()
const {getAllArticles, newArticle , updateArticle, deleteArticle, getArticlesByCreator, getAnArticlebyId} = require('../controllers/articleController')
const {verifyIsLogged, verifyIsCreator} =  require('../middleware/user.middleware')

router.get('/', getAllArticles)

// get articles by creator
router.get('/articlesByCreator', verifyIsLogged , getArticlesByCreator)

// get article by id
router.get('/:id', getAnArticlebyId)

router.post('/', verifyIsLogged, newArticle)

router.put('/:id', verifyIsCreator, updateArticle  )

router.delete('/:id', verifyIsCreator, deleteArticle )

module.exports = router