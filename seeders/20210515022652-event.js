'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Events',
    [
      {
        eventName: 'Basketball',
        eventLocation: 'Oklahoma',
        eventDescription: 'Oklahoma City Thunder vs Los Angelos Lakers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventName: 'Soccer',
        eventLocation: 'Atlanta',
        eventDescription: 'Atlanta United vs Toronto',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        eventName: 'Football',
        eventLocation: 'Atlanta',
        eventDescription: 'Atlanta Falcons vs Jacksonville Jaguars',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventName: 'Cheer',
        eventLocation: 'Atlanta',
        eventDescription: 'Varsity Cheer Finals',
        createdAt: new Date(),
        updatedAt: new Date(),

      },

      {
        eventName: 'Basketball',
        eventLocation: 'Miami',
        eventDescription: 'Miami Heat vs Atlanta Hawks',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventName: 'Baseball',
        eventLocation: 'Houston',
        eventDescription: 'Houston Astros vs Atlanta Braves',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventName: 'Concert',
        eventLocation: 'Miami',
        eventDescription: 'Lil Wayne Concert',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),
  
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  }
};


