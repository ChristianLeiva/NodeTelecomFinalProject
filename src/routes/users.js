const  express = require('express');
const  router = express.Router();
const usersController =  require('../controllers/userController')

/* GET users listing. */
router.get('/', usersController.getAllUsers);

router.get('/:name' , usersController.getOneUser)

router.post('/', usersController.newUser)

router.put('/:id', usersController.updateUser)

router.delete('/:id', usersController.deleteUser)

router.post('/login', usersController.login)

module.exports = router;
