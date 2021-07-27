var express = require('express');
var router = express.Router();

const userController = require('../controllers/user.controller');


router.get('/', userController.index);
router.get('/:id', userController.show);
router.post('/create', userController.create);
router.patch('/:id', userController.update);
router.delete('/:id', userController.destroy);


module.exports = router;