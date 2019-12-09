'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users",{
      user_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement : true,
        primaryKey: true
      },
    email: {
        isEmail: true,
        allowNull: false,
        type: Sequelize.STRING
      },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
    },
    password: {
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
