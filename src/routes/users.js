const  express = require('express');
const  router = express.Router();
const {getAllUsers, getOneUser, newUser, updateUser, deleteUser, login} =  require('../controllers/userController')

/* GET users listing. */
router.get('/', getAllUsers);

router.get('/:name' , getOneUser)

router.post('/',newUser)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

router.post('/login', login)

module.exports = router;
