'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = require('../users.json')
    data.forEach(e=> {
      e.createdAt = e.updatedAt = new Date()
    });
     await queryInterface.bulkInsert('Users',data, {});

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Users', null, {
      truncate : true,
      cascade: true,
      restartIdentity : true
     });
    
  }
};
