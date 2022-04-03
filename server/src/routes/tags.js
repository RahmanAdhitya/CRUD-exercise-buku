const router = require('express').Router();
const { tagsControllers } = require('../controllers');

router.post('/', tagsControllers.createNewTags);
router.get('/', tagsControllers.getAllTags);
router.get('/:id', tagsControllers.getTagsById);
router.delete('/:id', tagsControllers.deleteTagsById);

module.exports = router;
