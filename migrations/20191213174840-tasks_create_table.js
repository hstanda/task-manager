'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("tasks",{
      task_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement : true,
        primaryKey: true
      },
    user_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    })
  },
  down: (queryInterface, Sequelize) => {
    return new Promise()
  }
};