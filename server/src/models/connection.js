const { DataTypes } = require('sequelize');

const Connection = (sequelize) => {
  return sequelize.define('Connection', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  });
};

module.exports = Connection;
