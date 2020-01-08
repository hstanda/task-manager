const {sequelize ,Sequelize} = require('./index')
const rolesSchema = {
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
    }

}
const Role = sequelize.define('role', rolesSchema, { });
module.exports = Role