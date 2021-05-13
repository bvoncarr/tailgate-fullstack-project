'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Events',
    [
      {
        eventName: 'Basketball',
      },
      {
        eventName: 'Soccer',
      },

      {
        eventName: 'Football',
      },
      {
        eventName: 'Cheer',

      },

      {
        eventName: 'Basketball',
      },
      {
        eventName: 'Baseball',
      },

      {
        eventName: 'Basketball',
      },
      {
        eventName: 'Concert'
      },
    ],
    {},
  ),
  
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  }
};
