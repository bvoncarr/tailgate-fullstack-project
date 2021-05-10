'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Users', [{
          firstName: 'Annie',
          lastName: 'Easley',
          email: 'ajeasley@nasa.gov',
          createdAt: new Date(),
          updatedAt: new Date()
      }], {});
  },
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
        firstName: 'Brittney',
        lastName: 'Carr',
        email: 'bcarr@nasa.gov',
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});
  },
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
        firstName: 'Brit',
        lastName: 'Carr',
        email: 'bcarr@nasa.gov',
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});
  },
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
        firstName: 'Alex',
        lastName: 'Robo',
        email: 'AR@nasa.gov',
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
