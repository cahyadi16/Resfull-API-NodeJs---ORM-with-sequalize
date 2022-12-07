'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'M',
      lastName: 'Nandy',
      email: 'nandy@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
      },
    {
      firstName: 'Muhammad',
      lastName: 'Cahyadi',
      email: 'cahyadi@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};