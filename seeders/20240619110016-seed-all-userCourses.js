'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = require('../usersCourses.json')
    data.forEach(e=> {
      e.createdAt = e.updatedAt = new Date()
    });
     await queryInterface.bulkInsert('UserCourses',data, {});

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('UserCourses', null, {
      truncate : true,
      cascade: true,
      restartIdentity : true
     });
    
  }
};
