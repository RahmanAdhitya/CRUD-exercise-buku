const router = require('express').Router();
const { tagsControllers } = require('../controllers');

router.post('/', tagsControllers.createNewTags);

module.exports = router;
