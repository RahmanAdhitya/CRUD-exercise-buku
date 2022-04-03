const { Tags } = require('../lib/sequelize');

const tagsController = {
  createNewTags: async (req, res) => {
    try {
      const { tags_name } = req.body;

      console.log(Tags);
      const newTags = await Tags.create({
        tags_name,
      });

      return res.status(201).json({
        mesaage: 'create new tags',
        result: newTags,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: 'server error',
      });
    }
  },
  getAllTags: async (req, res) => {
    try {
      const listTags = await Tags.findAll();

      res.status(200).json({
        message: 'get all tags succsess',
        result: listTags,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'server error',
      });
    }
  },
  getTagsById: async (req, res) => {
    try {
      const { id } = req.params;

      const selectedTag = await Tags.findByPk(id);

      res.status(200).json({
        result: selectedTag,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'server error',
      });
    }
  },
  deleteTagsById: async (req, res) => {
    try {
      const { id } = req.params;

      await Tags.destroy({ where: { id: id } });
      res.status(200).json({
        message: 'tag deleted',
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'server error',
      });
    }
  },
};

module.exports = tagsController;
