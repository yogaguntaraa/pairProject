'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
const data = require('../courses.json')
    data.forEach(e=> {
      e.createdAt = e.updatedAt = new Date()
    });
     await queryInterface.bulkInsert('Courses',data, {});

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('People', null, {
      truncate : true,
      cascade: true,
      restartIdentity : true
     });
    
  }
};
