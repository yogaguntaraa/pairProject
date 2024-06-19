'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('UserCourses','startDate', { 
      type: Sequelize.DATE });
   
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.removeColumn('UserCourses','startDate');
    /**
     * Add reverting commands here.
     *
     * Example:
     */
  }
};
