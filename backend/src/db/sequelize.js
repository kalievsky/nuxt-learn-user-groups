const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('postgresql://postgres:example@db:5432/postgres', {
  dialect: 'postgres',
});
module.exports.sequelize = sequelize;

sequelize.sync();
