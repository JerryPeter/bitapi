var express = require('express');
var router = express.Router();

const userController = require('../controllers/user.controller');


router.get('/', userController.index);
router.get('/:id', userController.show);
router.post('/create', userController.create);
router.patch('/:id', userController.update);
router.delete('/:id', userController.destroy);

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.post('/login', userController.login);
router.post('/register', userController.register);

module.exports = router;

