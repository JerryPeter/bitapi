var express = require('express');
var router = express.Router();

const companyTypeController = require('../controllers/companytype.controller');
const authMiddleware = require('../middlewares/auth');


router.get('/', userController.index);
router.get('/:id', userController.show);
router.post('/create', authMiddleware.auth,userController.create);
router.patch('/:id', authMiddleware.auth, userController.update);
router.delete('/:id', authMiddleware.auth, userController.destroy);

module.exports = router;