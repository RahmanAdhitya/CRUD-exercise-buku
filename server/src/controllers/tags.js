const { Tags } = require('../lib/sequelize');

const tagsController = {
  createNewTags: async (req, res) => {
    try {
      const { tags_name } = req.body;

      console.log(tags_name);
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
};

module.exports = tagsController;
