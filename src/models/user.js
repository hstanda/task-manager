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
    // createdAt: false,
    // updatedAt: false,
    hooks: {
      beforeCreate: async function (user) {
        const salt = await bcryptjs.genSalt(8)
        user.password = await bcryptjs.hash(user.password, salt)
      }
    },
    instanceMethods: {
      // validPassword: async function(password) {
      //   console.log(password);
      //   // const salt = bcryptjs.genSaltSync(8);
      //   // return bcryptjs.compareSync(password, this.password);
      //   return await bcryptjs.compare(password, this.password);
      // }
    }
  });

User.prototype.validPassword = async function(password) {
    return await bcryptjs.compare(password, this.password);
}
  module.exports = User