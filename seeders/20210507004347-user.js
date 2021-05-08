'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('User', [{
        firstname: 'John',
        lastname: 'Doe'
     }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('User', null, {});
     
  }
};
