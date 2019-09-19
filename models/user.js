'use strict';
var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define(
        'User',
        {
            username: DataTypes.STRING,
            password: DataTypes.STRING,
            email: DataTypes.STRING,
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING,
            parked: DataTypes.BOOLEAN,
            paid: DataTypes.BOOLEAN,
            pick_up: DataTypes.BOOLEAN,
            in_route: DataTypes.BOOLEAN,
            arrived: DataTypes.BOOLEAN
        },
        {
            hooks: {
                beforeCreate: (user) => {
                    const salt = bcrypt.genSaltSync();
                    user.password = bcrypt.hashSync(user.password, salt);
                },
            }
        }
    );
    User.associate = function(models) {
        // associations can be defined here
    };

    User.prototype.validatePassword = function(password) {
        return bcrypt.compareSync(
            password,
            this.password
        );
    };

    User.sync();

    return User;
};
