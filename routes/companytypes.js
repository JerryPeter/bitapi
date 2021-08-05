var express = require('express');
var router = express.Router();

const companyTypeController = require('../controllers/companytype.controller');
const authMiddleware = require('../middlewares/auth');

router.get('/', companyTypeController.index);
router.get('/:id', companyTypeController.show);
router.post('/create', companyTypeController.create);
router.patch('/:id', authMiddleware.auth, companyTypeController.update);
router.delete('/:id', authMiddleware.auth, companyTypeController.destroy);

module.exports = router;