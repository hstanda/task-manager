'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("roles",{
      role_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement : true,
        primaryKey: true
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
