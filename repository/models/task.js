const { Sql, DataTypes } = require("sequelize");
const database = require("../database");

const task = database.define("task", {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  task: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  subtaskTo: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  priority: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  belongTo: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

task.sync().then(() => {
    console.log('table created!')
}).catch((error) => {
    console.error(error);
})

module.exports = task;