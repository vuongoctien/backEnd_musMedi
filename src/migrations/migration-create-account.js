'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('accounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickName: { type: Sequelize.STRING },
      password: { type: Sequelize.STRING },
      // fullName: { type: Sequelize.STRING },
      role: { type: Sequelize.STRING },
      gmail: { type: Sequelize.STRING },
      image: { type: Sequelize.BLOB('long') },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('accounts');
  }
};