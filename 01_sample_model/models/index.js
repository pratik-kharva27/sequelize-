const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('mydb','root','',{
    host:'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log("connection done....");
} catch (error) {
    console.error("connection not done.....",error);
}

// sequelize.drop()
// sequelize.sync()
module.exports= sequelize