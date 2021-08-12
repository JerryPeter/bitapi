var express = require('express');
var router = express.Router();

const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth');


router.get('/', userController.index);
router.get('/:id', userController.show);
router.post('/create', authMiddleware.auth, userController.create);
router.patch('/:id', authMiddleware.auth, userController.update);
router.delete('/:id', authMiddleware.auth, userController.destroy);

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.post('/login', userController.login);
router.post('/register', userController.register);

module.exports = router;