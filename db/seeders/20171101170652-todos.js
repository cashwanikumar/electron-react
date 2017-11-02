'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Todos', [{
        details: 'Wake up 6am',
        status: 'Pending',
        createdAt: '2017-11-01 15:06:43',
        updatedAt: '2017-11-01 15:06:43'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Todos', null, {});
  }
};