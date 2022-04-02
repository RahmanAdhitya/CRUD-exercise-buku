const { Sequelize } = require('sequelize');
const mysqlConfigs = require('../configs/database');

const sequelize = new Sequelize({
  username: mysqlConfigs.MYSQL_USERNAME,
  password: mysqlConfigs.MYSQL_PASSWORD,
  database: mysqlConfigs.MYSQL_DB_NAME,
  port: 3306,
  dialect: 'mysql',
  logging: false,
});

//models
const Book = require('../models/book')(sequelize);
const Tags = require('../models/tags')(sequelize);
const Connection = require('../models/connection')(sequelize);

// M: M;
Tags.belongsToMany(Book, { through: Connection, foreignKey: 'Book_id' });
Book.belongsToMany(Tags, { through: Connection, foreignKey: 'Tag_id' });
Book.hasMany(Connection, { foreignKey: 'Book_id' });
Connection.belongsTo(Book, { foreignKey: 'Book_id' });
Tags.hasMany(Connection, { foreignKey: 'Tag_id' });
Connection.belongsTo(Tags, { foreignKey: 'Tag_id' });

module.exports = {
  sequelize,
  Book,
  Tags,
  Connection,
};
