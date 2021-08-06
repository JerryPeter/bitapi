var express = require('express');
var router = express.Router();

const appController = require('../controllers/app.controller');
const authMiddleware = require('../middlewares/auth');

router.get('/', appController.index);
router.get('/:id', appController.show);
router.post('/create', authMiddleware.auth, appController.create);
router.patch('/:id', authMiddleware.auth, appController.update);
router.delete('/:id', authMiddleware.auth, appController.destroy);

module.exports = router;