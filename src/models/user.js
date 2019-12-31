const bcryptjs = require('bcryptjs')
const {sequelize ,Sequelize} = require('./index')
const userSchema = {
  user_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement : true,
      primaryKey: true
    },
  email: {
      isEmail: true,
      unique: true,
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
}
const User = sequelize.define('user', userSchema, {
    hooks: {
      beforeCreate: async function (user) {
        const salt = await bcryptjs.genSalt(8)
        user.password = await bcryptjs.hash(user.password, salt)
      },
      beforeUpdate: async function (user) {
        const salt = await bcryptjs.genSalt(8)
        user.password = await bcryptjs.hash(user.password, salt)
      }      
    }
  });

User.prototype.validPassword = async function(password) {
    return await bcryptjs.compare(password, this.password);
}
module.exports = User