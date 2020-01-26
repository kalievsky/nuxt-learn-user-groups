const {Model, DataTypes} = require('sequelize');
const {sequelize} = require('../sequelize.js');

const {User} = require('./user.js');

class UserGroup extends Model {}
UserGroup.init({
    name: DataTypes.STRING,
    createdAt: { type: DataTypes.DATE, field: 'created_at' },
    updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
}, {
    sequelize,
    modelName: 'user_groups',
});

UserGroup.hasMany(User, {
    foreignKey: 'user_group_id',
});

module.exports.UserGroup = UserGroup;
