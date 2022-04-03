const router = require('express').Router();
const { bookControllers } = require('../controllers');

router.post('/', bookControllers.createNewBook);
router.get('/', bookControllers.getAllBook);
router.get('/:id', bookControllers.getBookById);
router.delete('/:id', bookControllers.deleteBookById);
router.patch('/id', bookControllers.editBookById);

module.exports = router;
