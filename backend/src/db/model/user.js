const {Model, DataTypes} = require('sequelize');
const {sequelize} = require('../sequelize.js');

class User extends Model {}
User.init({
    name: DataTypes.STRING,
    createdAt: { type: DataTypes.DATE, field: 'created_at' },
    updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
}, {
    sequelize,
    modelName: 'users',
});

module.exports.User = User;
