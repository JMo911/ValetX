'use strict';
// var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
    const Car = sequelize.define(
        'Car',
        {
            licenseplate: DataTypes.STRING,
            spot: DataTypes.STRING,
            make_model: DataTypes.STRING,
            color: DataTypes.STRING,
            parked: DataTypes.BOOLEAN,
            paid: DataTypes.BOOLEAN,
            pick_up: DataTypes.BOOLEAN,
            in_route: DataTypes.BOOLEAN,
            arrived: DataTypes.BOOLEAN
        },
      
    );
    Car.associate = function(models) {
        // associations can be defined here
        Car.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }
          });
    };


    Car.sync();

    return Car;
};
