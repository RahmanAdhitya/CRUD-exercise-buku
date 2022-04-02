const { DataTypes } = require('sequelize');

const Tags = (sequelize) => {
  return sequelize.define('Tags', {
    tags_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

module.exports = Tags;
