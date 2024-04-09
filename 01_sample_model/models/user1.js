const {  DataTypes,Model } = require('sequelize');
const sequelize = require('./index');

class User1 extends Model {}

User1.init({
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  tableName:"user1",
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});

// the defined model is the class itself
// console.log(User1 === sequelize.models.User1); // true

module.exports=User1