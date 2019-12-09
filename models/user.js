const {sequelize ,Sequelize} = require('./index')
const User = sequelize.define('user', {
    // attributes
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement : true,
        primaryKey: true
      },
    email: {
        isEmail: true,
        uni: true,
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
    
  }, {
    // createdAt: false,
    // updatedAt: false,
  });
  module.exports = User