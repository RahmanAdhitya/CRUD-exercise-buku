const { Connection, Tags } = require('../lib/sequelize');

const connectionController = {
  creatNewConnection: async (req, res) => {
    try {
      const { BookId, TagId } = req.body;
      const newConnection = await Connection.create({
        BookId,
        TagId,
      });
      res.status(201).json({
        message: 'connection created',
        result: newConnection,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'server error',
      });
    }
  },
  getAllConnection: async (req, res) => {
    try {
      const allConnection = await Connection.findAll();

      res.status(200).json({
        message: 'get all connection succsess',
        result: allConnection,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'server error',
      });
    }
  },
  createConnectionById: async (req, res) => {
    try {
      const { BookId } = req.params;
      const { TagId } = req.body;
      await Connection.create({ BookId, TagId });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'server error',
      });
    }
  },
};

module.exports = connectionController;
