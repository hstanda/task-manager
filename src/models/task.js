const {sequelize ,Sequelize} = require('./index')
const tasksSchema = {
    task_id: {
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
        type: Sequelize.STRING
    },
    user_id:{
        type: Sequelize.INTEGER(11),
        allowNull:false
    }

}
const Task = sequelize.define('task', tasksSchema, { });
module.exports = Task