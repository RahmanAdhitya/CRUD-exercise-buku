const router = require('express').Router();
const { connectionController } = require('../controllers');

router.post('/', connectionController.creatNewConnection);
router.get('/', connectionController.getAllConnection);
router.patch('/:id', connectionController.editConnectionById);

module.exports = router;
