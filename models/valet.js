'use strict';

module.exports = function(sequelize, DataTypes) {
    const Valet = sequelize.define("Valet",
        {
            badge_id: DataTypes.CHAR,
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING,
        },
      
    );

    Valet.sync();
    return Valet;
};

