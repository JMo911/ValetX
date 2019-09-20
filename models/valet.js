'use strict';
var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
    const Valet = sequelize.define(
        'Valet',
        {
            badgenumber: DataTypes.STRING,
            password: DataTypes.STRING,
            email: DataTypes.STRING,
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING
        },
        {
            hooks: {
                beforeCreate: (valet) => {
                    const salt = bcrypt.genSaltSync();
                    valet.password = bcrypt.hashSync(valet.password, salt);
                },
            }
        }
    );
    Valet.associate = function(models) {
        // associations can be defined here
    };

    Valet.prototype.validatePassword = function(password) {
        return bcrypt.compareSync(
            password,
            this.password
        );
    };

    Valet.sync();

    return Valet;
};
