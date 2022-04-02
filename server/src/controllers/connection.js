const { Connection, Tags } = require('../lib/sequelize');

const connectionController = {
  creatNewConnection: async (req, res) => {
    try {
      const { Book_id, Tag_id } = req.body;
      const newConnection = await Connection.create({
        Book_id,
        Tag_id,
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
};

module.exports = connectionController;
