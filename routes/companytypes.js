var express = require('express');
var router = express.Router();

const companyTypeController = require('../controllers/companytype.controller');
const authMiddleware = require('../middlewares/auth');

router.get('/', authMiddleware.auth, companyTypeController.index);
router.get('/:id', authMiddleware.auth, companyTypeController.show);
router.post('/create', authMiddleware.auth, companyTypeController.create);
router.patch('/:id', authMiddleware.auth, companyTypeController.update);
router.delete('/:id', authMiddleware.auth, companyTypeController.destroy);

module.exports = router;