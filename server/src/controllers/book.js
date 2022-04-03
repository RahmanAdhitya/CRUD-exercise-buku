const { Book, Tags, Connection } = require('../lib/sequelize');

const bookControllers = {
  createNewBook: async (req, res) => {
    try {
      const { book_title } = req.body;
      console.log(book_title);
      const newBook = await Book.create({
        book_title,
      });

      return res.status(201).json({
        mesaage: 'create new book',
        result: newBook,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        message: 'server error',
      });
    }
  },
  getAllBook: async (req, res) => {
    try {
      const allBook = await Book.findAll({ include: Tags });
      res.status(200).json({
        message: 'get all Books succsess',
        result: allBook,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'server error',
      });
    }
  },
  getBookById: async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id);
      const selectedBook = await Book.findByPk(id, {
        include: Tags,
      });
      console.log(selectedBook);

      res.status(200).json({
        message: 'get all connection succsess',
        result: selectedBook,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'server error',
      });
    }
  },
  deleteBookById: async (req, res) => {
    try {
      const { id } = req.params;

      await Book.destroy({ where: { id: id } });
      res.status(200).json({
        message: 'book deleted',
        result: Book,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'server error',
      });
    }
  },
  editBookById: async (req, res) => {
    try {
      const { id } = req.params;
      const { book_title } = req.body;

      await Book.update({ book_title: book_title }, { where: { id: id } });
      res.status(200).json({
        message: 'book deleted',
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'server error',
      });
    }
  },
};

module.exports = bookControllers;
