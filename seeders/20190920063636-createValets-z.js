'use strict';
const models = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   var fields = {
    badge_id: '0123456789',
    first_name: 'John',
    last_name: 'Doe',
    createdAt: new Date(),
    updatedAt: new Date()
};
return models.Valet.create(fields);
},

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete(
    'Valets',
    null,
    {}
);
}
};
