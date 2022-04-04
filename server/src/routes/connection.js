const router = require('express').Router();
const { connectionController } = require('../controllers');

router.post('/', connectionController.creatNewConnection);
router.get('/', connectionController.getAllConnection);
router.post('/:BookId', connectionController.createConnectionById);

module.exports = router;
