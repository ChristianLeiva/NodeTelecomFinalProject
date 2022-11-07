const express = require('express')
const router = express.Router()
const {getAllArticles, newArticle , updateArticle, deleteArticle, getArticlesByCreator, getAnArticlebyId, addComment, giveLike, getAnArticlebyTitle} = require('../controllers/articleController')
const {verifyIsLogged, verifyIsCreator} =  require('../middleware/user.middleware')

router.get('/', getAllArticles)

// get articles by creator
router.get('/articlesByCreator', verifyIsLogged , getArticlesByCreator)

router.get('/findByTitle/:title', getAnArticlebyTitle)

// get article by id
router.get('/:id', getAnArticlebyId)

router.post('/like/:articleId', verifyIsLogged, giveLike)

router.post('/', verifyIsLogged, newArticle)

router.put('/:id', verifyIsCreator, updateArticle  )

router.delete('/:id', verifyIsCreator, deleteArticle )

router.post('/comment/:articleId', verifyIsLogged, addComment)

module.exports = router