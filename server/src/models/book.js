const { DataTypes } = require('sequelize');

const Book = (sequelize) => {
  return sequelize.define('Books', {
    book_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

module.exports = Book;
