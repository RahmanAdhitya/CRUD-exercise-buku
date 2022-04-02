const router = require('express').Router();
const { bookControllers } = require('../controllers');

router.post('/', bookControllers.createNewBook);
router.get('/', bookControllers.getAllBook);
router.get('/:id', bookControllers.getBookById);

module.exports = router;
